import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { Http } from '@angular/http';

/*
  Generated class for the LogInService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class LogInService {
  name = 'Ekenedilichukwu Ashinze'
  
  validateUserResult(msg) {
    console.log(msg)
  }
  constructor() {
    console.log('Hello LogInService Provider');
  }

}
