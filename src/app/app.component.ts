import { Component } from '@angular/core';
import { Captcha } from './captcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
    let result = "";
    if (num === 1) {
      result = "one";
    } else if (num === 2) {
      result = "two";
    }
    return result;
  }

}
