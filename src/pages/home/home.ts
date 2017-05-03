import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions'
import { MaterialsPage } from '../materials/materials'
import { Pins } from '../../providers/pins'
/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  openQuestionsPage() {
    this.presentLoading()
    this.pins.randomiseQuestions()
    this.navCtrl.push(QuestionsPage)
  }
  openMaterialsPage() {
    this.navCtrl.push(MaterialsPage)
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public pins: Pins, public loadingCtrl: LoadingController) {
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 900
    });
    loader.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
