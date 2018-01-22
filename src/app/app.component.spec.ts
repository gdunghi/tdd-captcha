import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe("Captcha first pattern left operand", () => {

    it("test 1 should be 1", async(() => {
      const component = TestBed.createComponent(AppComponent);

      let leftOperandResult = component.componentInstance.captcha(1, 1);

      expect(leftOperandResult).toEqual("1");
    }));

    it("test 2 should be 2", async(() => {
      const component = TestBed.createComponent(AppComponent);

      let leftOperandResult = component.componentInstance.captcha(1, 2);

      expect(leftOperandResult).toEqual("2");
    }));

  });






});
