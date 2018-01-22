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

  describe("Captcha", () => {
    describe("First pattern left operand", () => {

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

    describe("Secound pattern left operand", () => {
      it("test 1 should be one", async(() => {
        const component = TestBed.createComponent(AppComponent);

        let leftOperandResult = component.componentInstance.captcha(2, 1);

        expect(leftOperandResult).toEqual("one");
      }));

      it("test 2 should be two", async(() => {
        const component = TestBed.createComponent(AppComponent);

        let leftOperandResult = component.componentInstance.captcha(2, 2);

        expect(leftOperandResult).toEqual("two");
      }));


    });

  });










});
