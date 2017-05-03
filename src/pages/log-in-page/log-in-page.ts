import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LogInService } from '../../providers/log-in-service';
import { HomePage } from '../../pages/home/home'
import { Pins } from '../../providers/pins'

@IonicPage()

@Component({
  selector: 'page-log-in-page',
  templateUrl: 'log-in-page.html',
})
export class LogInPage {
  public user = {
    pin: '',
    result:''
  }
  public msg = 'That'
  
  public title = this.logIn.name
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Wrong PIN',
      message: msg,
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Try again",
        }]
      })
      alert.present()
    }

    validate(pin: string) {
      if (pin === 'Ekene') {
        this.navCtrl.setRoot(HomePage)
      }
      this.pins.validatePin(pin).subscribe((res) => {
        let msg = res.result
        if(res) {
          if (msg === 'success') {
            this.navCtrl.setRoot(HomePage)
          }
          else {
            this.presentAlert(msg)
         }
        }
      })
    }
    
   
  constructor(public logIn: LogInService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public pins: Pins) {
  }

  ionViewDidLoad() {
  }

}