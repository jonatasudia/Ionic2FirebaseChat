import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { UserService } from './../providers/user/user.service';


const firebaseAppConfig: FirebaseAppConfig ={
  apiKey: "AIzaSyDr8wJPVO6sY7agu9r6ugfcsd0Jxt2b-po",
  authDomain: "ionic2-firebase-chat-8cde7.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-8cde7.firebaseio.com",
  storageBucket: "ionic2-firebase-chat-8cde7.appspot.com",
  messagingSenderId: "259957710048"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
