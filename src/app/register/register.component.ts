import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  nameCompany!: string;
  email!: string;
  password!: string;

  constructor() {}

  register() {

  }
}
