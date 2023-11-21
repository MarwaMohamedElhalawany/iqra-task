import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { PhotosComponent } from './Component/photos/photos.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import{HttpClientModule} from '@angular/common/http';
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {provideAuth, getAuth} from '@angular/fire/auth';
import { PhotosService } from './Services/photos.service';
import { RegisterComponent } from './Component/register/register.component';

const firebaseConfig = {
  apiKey: "AIzaSyCpZKTd9Le6tzYrWjsQhZzHe6nzroG9KYg",
  authDomain: "task-1f2a3.firebaseapp.com",
  projectId: "task-1f2a3",
  storageBucket: "task-1f2a3.appspot.com",
  messagingSenderId: "999492596734",
  appId: "1:999492596734:web:fcdf01ed7861c17d2b06af",
  measurementId: "G-EK7C69CNB5"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PhotosComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ReactiveFormsModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,

    // MomentTimezoneModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { 
  
  
  
}




