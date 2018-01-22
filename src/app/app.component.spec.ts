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

    it("should return 1 when left opernd is 1", async(() => {
      const component = TestBed.createComponent(AppComponent);

      let leftOperandResult = component.componentInstance.captcha(1, 1);

      expect(leftOperandResult).toEqual("1");
    }));

  });






});
