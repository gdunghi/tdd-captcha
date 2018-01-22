import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  captcha = (pattern: number, leftOperand: number): string => {
    if (pattern === 1) {
      return leftOperand + "";
    } else if (pattern === 2) {
      let result = "";
      if (leftOperand === 1) {
        result = "one";
      } else if (leftOperand === 2) {
        result = "two";
      }
      return result;
    }
  }
}
