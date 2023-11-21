import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth"; 
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

   
  
})
export class LoginComponent {
  error:string='';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  login() {

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          // Login successful, navigate to a new page
          this.router.navigate(['/home']);
        })
        .catch((error : any) => {
          console.error('Login failed:', error.message);
        });
    }
  }

loginWithGoogle() {
  this.auth.signInWithPopup(new GoogleAuthProvider())
    .then((userCredential: any) => {
            this.router.navigate(['/home']);

    })
    .catch((error : any) => {
      console.error('Google login error', error.message );
    });
}


}
