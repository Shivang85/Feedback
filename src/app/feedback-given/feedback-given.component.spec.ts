import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackGivenComponent } from './feedback-given.component';

describe('FeedbackGivenComponent', () => {
  let component: FeedbackGivenComponent;
  let fixture: ComponentFixture<FeedbackGivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackGivenComponent]
    });
    fixture = TestBed.createComponent(FeedbackGivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
