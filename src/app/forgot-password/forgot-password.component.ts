import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { AccountService } from '../core/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.styl']
})
export class ForgotPasswordComponent implements OnInit {
  loading = false;
  success = false;
  model = { 
    email: '' 
  };

  constructor(
    private snackBar: MdSnackBar,
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.accountService.forgotPassword(this.model.email)
      .finally(() => this.loading = false)
      .subscribe(
        value => {
          this.success = true;
        },
        error => {
          this.snackBar.open('Failed to reset your password. Please try again later.', 'Close', {
            duration: 4000
          });
        }
      );
  }
}
