import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/_models/user";
import { environment } from "src/environments/environment";


@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) {}

    loginUser(user: User) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiUrl + '/users/login', user).subscribe(
                (ans) => console.log(ans),
                (error) => {
                    console.log('Error: ', error)
                })
        }) 
    }
}