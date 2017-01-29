import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class AccountService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  forgotPassword(email) {
    return this.http.post(`${environment.personaApiUri}api/account/forgotpassword`, JSON.stringify({
      email
    }), { headers: this.headers });
  }

  resetPassword(email, password, code) {
    return this.http.post(`${environment.personaApiUri}api/account/resetpassword`, JSON.stringify({
      email,
      password,
      code
    }), { headers: this.headers });
  }
}
