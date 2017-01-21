import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {
  showTyping;

  constructor() { }

  ngOnInit() {
  }

  toggleTyping() {
    this.showTyping = !this.showTyping;
  }
}
