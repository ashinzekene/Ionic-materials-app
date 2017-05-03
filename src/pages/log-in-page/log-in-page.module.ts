import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LogIn } from './log-in';

@NgModule({
  declarations: [
    LogIn,
  ],
  imports: [
    IonicModule.forRoot(LogIn),
  ],
  exports: [
    LogIn
  ]
})
export class LogInModule {}
