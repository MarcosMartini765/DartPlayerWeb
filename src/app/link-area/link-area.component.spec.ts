import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAreaComponent } from './link-area.component';

describe('LinkAreaComponent', () => {
  let component: LinkAreaComponent;
  let fixture: ComponentFixture<LinkAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
