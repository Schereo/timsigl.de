import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../_models/login-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class LoginService {
    user = new BehaviorSubject<User>(null);
    isLoggedIn = false;

    constructor(private http: HttpClient) {}

    loginUser(user: LoginUser): Observable<User> {
        return this.http.post<User>(environment.apiUrl + '/users/login', user)
            .pipe(
                tap(resData => {
                    this.handleAuthentication(resData.user, resData.token);
                })
            );
    }

    signupUser(user: LoginUser) {
        return this.http.post<User>(environment.apiUrl + '/users', user)
            .pipe(
                tap(resData => {
                    this.handleAuthentication(resData.user, resData.token);
                })
            );
    }

    autoLoginUser() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const token = userData._token;
        this.http.post<null>(environment.apiUrl + '/users/autologin', {token: token}).subscribe(
            () => {
                const loadedUser = new User(userData.user, userData._token);
                this.user.next(loadedUser);
            },
            () => {
                localStorage.removeItem('userData');
                return;
            });
    }

    logoutUser(): Observable<null> {
        localStorage.removeItem('userData');
        return this.http.get<null>(environment.apiUrl + '/users/logout');
    }

    private handleAuthentication(userData: any, token: string) {
        const user = new User(userData, token);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

}
