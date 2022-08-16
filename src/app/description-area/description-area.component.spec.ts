import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslationService } from '../translation.service';

import { DescriptionAreaComponent } from './description-area.component';

describe('DescriptionAreaComponent', () => {
  let component: DescriptionAreaComponent;
  let fixture: ComponentFixture<DescriptionAreaComponent>;
  const translate = new TranslationService()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 H2s', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const h2s = descriptionComponent.querySelectorAll('h2')
    expect(h2s.length).toEqual(3);
  });

  it('should have the right text for the first h2', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const h2s = descriptionComponent.querySelectorAll('h2')
    const h2 = h2s[0]
    expect(h2.textContent).toEqual(translate.getDescriptionArea().first);
  });

  it('should have the right text for the second h2', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const h2s = descriptionComponent.querySelectorAll('h2')
    const h2 = h2s[1]
    expect(h2.textContent).toEqual(translate.getDescriptionArea().second);
  });

  it('should have the right text for the third h2', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const h2s = descriptionComponent.querySelectorAll('h2')
    const h2 = h2s[2]
    expect(h2.textContent).toEqual(translate.getDescriptionArea().third);
  });

  it('should have a section with a class name of center', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const section: HTMLElement = descriptionComponent.querySelector('section')!
    expect(section.className).toEqual('center');
  });
});
