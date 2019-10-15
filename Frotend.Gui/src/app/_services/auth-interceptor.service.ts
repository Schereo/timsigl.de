import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.loginService.user.pipe(
            take(1),
            exhaustMap(user => {
                console.log('User', user);
                if (!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({headers: new HttpHeaders({
                    'Authorization' : `Bearer ${user.token}`
                })});
                return next.handle(modifiedReq);
            })
        );

    }
}
