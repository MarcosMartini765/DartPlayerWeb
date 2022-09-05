import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import english from '../../assets/i18n/en.json'

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with a class named center', () => {
    const element: HTMLElement = fixture.nativeElement
    const div: HTMLElement = element.querySelector('div')!
    expect(div.className).toEqual('center');
  });

  it('should have a section with a class named section', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    expect(section.className).toEqual('section');
  });

  it('should render the what-info h2', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    const h2s = section.querySelectorAll('h2')
    const h2 = h2s[0]
    expect(h2.textContent).toEqual(english['privacy-policy']['what-info'].title);
  });

  it('should render the what-info first h2', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    const ps = section.querySelectorAll('p')
    const p = ps[0]
    expect(p.textContent?.trim()).toContain(english['privacy-policy']['what-info'].first);
  });

  it('should render the how-info title', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    const h2s = section.querySelectorAll('h2')
    const h2 = h2s[1]
    expect(h2.textContent?.trim()).toContain(english['privacy-policy']['how-info'].title);
  });

  it('should render the how-info first h2', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    const ps = section.querySelectorAll('p')
    const p = ps[1]
    expect(p.textContent?.trim()).toContain(english['privacy-policy']['how-info'].first);
  });

  it('should render the data-collection title', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    const h2s = section.querySelectorAll('h2')
    const h2 = h2s[2]
    expect(h2.textContent?.trim()).toEqual(english['privacy-policy']['data-collection'].title);
  });

  it('should render the data-collection first h2', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    const ps = section.querySelectorAll('p')
    const p = ps[2]
    expect(p.textContent?.trim()).toEqual(english['privacy-policy']['data-collection'].first);
  });

});
