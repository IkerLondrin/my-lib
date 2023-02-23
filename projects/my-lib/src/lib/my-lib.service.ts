import { Injectable } from '@angular/core';
import concat from 'lodash.concat';


@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  doSomething() {
    console.log('concat: ', concat([1], 2));
  }
}
