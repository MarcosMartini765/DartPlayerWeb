import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionAreaComponent } from './description-area.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import english from '../../assets/i18n/en.json'

describe('DescriptionAreaComponent', () => {
  let component: DescriptionAreaComponent;
  let fixture: ComponentFixture<DescriptionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionAreaComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
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
    expect(h2.textContent).toEqual(english['description-area'].first);
  });

  it('should have the right text for the second h2', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const h2s = descriptionComponent.querySelectorAll('h2')
    const h2 = h2s[1]
    expect(h2.textContent).toEqual(english['description-area'].second);
  });

  it('should have the right text for the third h2', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const h2s = descriptionComponent.querySelectorAll('h2')
    const h2 = h2s[2]
    expect(h2.textContent).toEqual(english['description-area'].third);
  });

  it('should have a section with a class name of center', () => {
    const descriptionComponent: HTMLElement = fixture.nativeElement
    const section: HTMLElement = descriptionComponent.querySelector('section')!
    expect(section.className).toEqual('center');
  });
});
