import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppBarComponent } from './app-bar.component';
import english from '../../assets/i18n/en.json'

describe('AppBarComponent', () => {
  let component: AppBarComponent;
  let fixture: ComponentFixture<AppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have DartPlayer as title', () => {
    const appBarElement: HTMLElement  = fixture.nativeElement
    const button: HTMLSpanElement = appBarElement.querySelector('span')!
    expect(button.textContent).toEqual("DartPlayer")
  });

  it('should have a span with a spacer class', () => {
    const appBarElement: HTMLElement  = fixture.nativeElement
    const spans: NodeListOf<HTMLSpanElement> = appBarElement.querySelectorAll('span')!
    expect(spans[1].classList).toContain('spacer')
  });

  it('should have a img tag in the first button', () => {
    const appBarElement: HTMLElement  = fixture.nativeElement
    const buttons: NodeListOf<HTMLButtonElement> = appBarElement.querySelectorAll('button')!
    const img = buttons[0].children[0]
    expect(img).toBeTruthy()
  });

  it('should have Privacy text in the second button', () => {
    const appBarElement: HTMLElement  = fixture.nativeElement
    const a: HTMLElement = appBarElement.querySelector('a')!
    expect(a.textContent?.trim()).toEqual(english['app-bar-area'].privacy)
  });
});
