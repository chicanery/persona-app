import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.styl']
})
export class AccountComponent implements OnInit {
  tabs = [
    { label: 'Account', link: '/account' },
    { label: 'Settings', link: '/account' },
    { label: 'Notifications', link: '/account' }
  ];

  constructor() { }

  ngOnInit() {
  }
  
}
