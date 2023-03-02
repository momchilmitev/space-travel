import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineIndicatorsComponent } from './underline-indicators.component';

describe('UnderlineIndicatorsComponent', () => {
  let component: UnderlineIndicatorsComponent;
  let fixture: ComponentFixture<UnderlineIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderlineIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderlineIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
