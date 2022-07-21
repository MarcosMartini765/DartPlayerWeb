import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotsAreaComponent } from './screenshots-area.component';

describe('ScreenshotsAreaComponent', () => {
  let component: ScreenshotsAreaComponent;
  let fixture: ComponentFixture<ScreenshotsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenshotsAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenshotsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
