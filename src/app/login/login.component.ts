import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  showPassword;

  constructor() { }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
