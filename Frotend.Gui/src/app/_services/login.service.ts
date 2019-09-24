import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/user";
import { environment } from "src/environments/environment";

interface UserResponseData {
    user: {
        mailVerified: boolean,
        _id: string,
        name: string,
        email: string,
        __v : Number
    },
    token: string
}

@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) {}

    loginUser(user: User) {
        return this.http.post<UserResponseData>(environment.apiUrl + '/users/login', user); 
    };
}