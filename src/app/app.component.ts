import { Component } from '@angular/core';
import { Captcha } from './captcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public numberWorinding = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" };
  
  captcha = (pattern: number, leftOperand: number, operand: number, righOperand: number): Captcha => {
    let captcha = new Captcha();
    if (pattern === 1) {
      captcha.leftOperand = leftOperand + "";
      captcha.rightOperand = this.numberToWording(righOperand);
    } else if (pattern === 2) {
      captcha.leftOperand = this.numberToWording(leftOperand);
    }
    return captcha
  }

  numberToWording = (num: number): string => {
    return this.numberWorinding[num];
  }

}
