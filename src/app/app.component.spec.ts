import { Captcha } from './captcha';
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

        it("test 2 should be two", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(1, 2, 1, 2);

          expect(captcha.rightOperand).toEqual("two");
        }));

        it("test 3 should be three", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(1, 2, 1, 3);

          expect(captcha.rightOperand).toEqual("three");
        }));
      });

    });

    describe("Secound pattern", () => {
      describe("left operand", () => {
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


        it("test 3 should be two", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(2, 3, 1, 1);

          expect(captcha.leftOperand).toEqual("three");
        }));
      });

      describe("right operand", () => {
        it("test 1 should be 1", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(2, 1, 1, 1);

          expect(captcha.rightOperand).toEqual("1");
        }));

        it("test 2 should be 2", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(2, 1, 1, 2);

          expect(captcha.rightOperand).toEqual("2");
        }));

        it("test 5 should be 5", async(() => {
          const component = TestBed.createComponent(AppComponent);

          let captcha = component.componentInstance.captcha(2, 1, 1, 5);

          expect(captcha.rightOperand).toEqual("5");
        }));

      });

    });



  });










});
