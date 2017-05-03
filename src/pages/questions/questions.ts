import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Slides } from 'ionic-angular';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';
import { Pins } from '../../providers/pins';

class Item {
  a:String; 
  answer:String;
  b: String;
  c:String;
  d: String;
  e: String;
  question:String;
  _id: String
}
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  @ViewChild(Slides) slides: Slides;
  public items= this.pins.questions
  private answerArray: Boolean[] = []

  closePage() {
    this.navCtrl.setRoot(HomePage)
  }

  goToListPage(event, item) {
    this.navCtrl.push(ListPage);
  }
  // getQuestions() {
  //   this.pins.fetchQuestions()
  //   this.items = this.pins.questions
  // }
  computeAnswers(i) {
    let score = 0
      this.answerArray.forEach(function(val,ind) {
        if ( val === true) {
          score++
        }
      })
      this.showScore(score)
  }
  checkAnswer(event, item, i) {
    if(event === item.answer ) {
      console.log(`Correct`)
      this.answerArray[i] = true
    }
    else {
      console.log(`Wrong, Answer- ${item.answer}`)
      this.answerArray[i] = false
    }
  }
  showScore(score){
    let answersAlert = this.alertCtrl.create({
      title: 'YOUR SCORE',
      message: `You scored - ${score}/20`,
      buttons: [
        {text: "Cancel"},
        {text: "Ok"}
      ]
    })
    answersAlert.present()
  }
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public pins:Pins) {

  }
  ionViewDidLoad() {
    //this.getQuestions()
  }

}
