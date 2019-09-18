import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) {}

    loginUser(email: string, password: string) {
        this.http.get
    }
}