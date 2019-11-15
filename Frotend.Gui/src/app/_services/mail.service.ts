import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mail } from "../_models/mail";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()

export class MailService {

    constructor(private httpClient: HttpClient) {}

    sendMail(sender: string, subject: string, message: string, receiver = 'info@timsigl.de'): Observable<Mail> {
        const mail: Mail = {receiver, sender, subject, message};
        return this.httpClient.post<Mail>(environment.apiUrl + '/mail', mail);
    }
}
