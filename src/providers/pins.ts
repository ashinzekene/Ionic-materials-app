import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as randomise from 'randomise-array';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the Pins provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pins {
  public questions= []
  constructor(public http: Http, private storage: Storage) {
    this.storage.ready().then(()=> {
      this.storage.get('questions').then((val)=> {
        let temp = JSON.parse(val)
        this.questions = randomise(temp, {length:20})
      })
    })
  }
  randomiseQuestions() {
    this.storage.get('questions').then((val)=> {
      let temp = JSON.parse(val)
      this.questions = randomise(temp, {length:20})
    })
  }
  
  validatePin(pin) {
    return this.http.get(`http://localhost:5500/user/validate/?pin=${pin}&value=400`).map(
      (res) => {
        return res.json() 
      }).catch((err)=> {
        return [{result: "A network error occured, are you online?"}]
      })
  }
  // fetchQuestions() {
  //   if (this.questions[10]) return this.questions
  //   this.http.get('http://localhost:5555/all-questions').map(res => res.json()).subscribe((res)=> {
  //     let temp = []
  //     res.questions.forEach(element => {
  //       temp.push(element)
  //     });
  //     this.storage.ready().then(()=> {
  //       this.storage.set('questions', JSON.stringify(temp))
  //       this.storage.get('questions').then((val)=> {
  //         this.questions = JSON.parse(val)
  //         return this.questions
  //       })
  //     })
  //   })
  // }
  // getQuestions() {
  //   if (this.questions[10]) return this.questions
  //   this.fetchQuestions()
  // }

}
