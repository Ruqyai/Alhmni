import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit() {
    const user = this.loginForm.value;
    console.log('is it working');
    this.authService.login(user.email, user.password)
    .then( () => {
      console.log('login user : ' + user.email);
    })
    .catch( (err) => { console.log('user does not exist'); });
  }

}
