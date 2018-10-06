import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email, password) {
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
