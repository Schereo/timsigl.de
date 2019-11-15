import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/_services/mail.service';
import { NgForm } from '@angular/forms';

interface ContactForm {
  subject: string;
  email: string;
  text: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageSend = false;

  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
    const formValues = contactForm.value;
    this.mailService.sendMail(`${formValues.subject} - von ${formValues.email}`, formValues.text).subscribe(
      () => {
        console.log('Mail send');
        contactForm.reset();
        this.messageSend = true;
      },
      () => {
        console.log('Was not able to send mail');
        this.messageSend = false;
      });
  }

}
