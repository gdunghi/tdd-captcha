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
    describe("First pattern", () => {

      describe("left operand", () => {
        it("test 1 should be 1", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(1, 1, 1, 1);

          expect(captcha.leftOperand).toEqual("1");
        }));

        it("test 2 should be 2", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(1, 2, 1, 1);

          expect(captcha.leftOperand).toEqual("2");
        }));
      });

      describe("right operand", () => {
        it("test 1 shuld be one", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(1, 2, 1, 1);

          expect(captcha.rightOperand).toEqual("one");
        }));
      });

    });

    describe("Secound pattern left operand", () => {
      it("test 1 should be one", async(() => {
        const component = TestBed.createComponent(AppComponent);

        let captcha = component.componentInstance.captcha(2, 1, 1, 1);

        expect(captcha.leftOperand).toEqual("one");
      }));

      it("test 2 should be two", async(() => {
        const component = TestBed.createComponent(AppComponent);

        let captcha = component.componentInstance.captcha(2, 2, 1, 1);

        expect(captcha.leftOperand).toEqual("two");
      }));
    });

  });










});
