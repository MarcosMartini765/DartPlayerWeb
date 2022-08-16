import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAreaComponent } from './title-area.component';

describe('TitleAreaComponent', () => {
  let component: TitleAreaComponent;
  let fixture: ComponentFixture<TitleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a section with a class named center', () => {
    const element: HTMLElement = fixture.nativeElement
    const section: HTMLElement = element.querySelector('section')!
    expect(section.className).toEqual('center');
  });
});
