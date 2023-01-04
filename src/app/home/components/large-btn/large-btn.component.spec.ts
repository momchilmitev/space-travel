import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeBtnComponent } from './large-btn.component';

describe('LargeBtnComponent', () => {
  let component: LargeBtnComponent;
  let fixture: ComponentFixture<LargeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
