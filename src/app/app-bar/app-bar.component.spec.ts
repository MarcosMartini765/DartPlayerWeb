import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslationService } from '../translation.service';

import { AppBarComponent } from './app-bar.component';

describe('AppBarComponent', () => {
  let component: AppBarComponent;
  let fixture: ComponentFixture<AppBarComponent>;
  let translation = new TranslationService()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarComponent ]
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
    expect(buttons[0].children[0].className).toContain('appIcon')
  });

  it('should have Privacy text in the second button', () => {
    const appBarElement: HTMLElement  = fixture.nativeElement
    const buttons: NodeListOf<HTMLButtonElement> = appBarElement.querySelectorAll('button')!
    expect(buttons[1].textContent?.trim()).toEqual(translation.getAppBarArea().privacy)
  });
});
