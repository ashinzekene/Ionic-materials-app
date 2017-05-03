import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { QuestionsPage } from '../pages/questions/questions';
import { MaterialsPage } from '../pages/materials/materials';
import { LogInPage } from '../pages/log-in-page/log-in-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LogInService } from "../providers/log-in-service";
import { Pins } from "../providers/pins";
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    QuestionsPage,
    MaterialsPage,
    LogInPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    QuestionsPage,
    MaterialsPage,
    LogInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LogInService,
    Pins,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
