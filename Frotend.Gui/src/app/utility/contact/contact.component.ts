import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/_services/mail.service';

interface ContactForm {
  subject: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  onSubmit(contactForm: ContactForm) {
    this.mailService.sendMail(contactForm.email, contactForm.subject, contactForm.message).subscribe(
      () => {
        console.log('Mail send');
      },
      () => {
        console.log('Was not able to send mail')
      });
  }

}
