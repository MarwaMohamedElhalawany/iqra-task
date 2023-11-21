import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth"; 
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error:string='';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) {

    this.registerForm = this.fb.group({
      first_name:['', [Validators.minLength(3),Validators.maxLength(10), Validators.required]],
      last_name:['',[Validators.minLength(3),Validators.maxLength(10), Validators.required]],
      age:['',[Validators.required, Validators.min(16), Validators.max(80)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country:['', [Validators.required]],
    });

}
registrationError: string | null = null;

register() {

    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        // Handle registration errors
        this.registrationError = error.message;
        console.error('Registration error:', error);      });
    }
  }


  
}
