import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/models/user";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) {}

    loginUser(user: User) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiUrl + '/login', user).subscribe(
                ())
        }) 
    }
}