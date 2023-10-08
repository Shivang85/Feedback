import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { feedbackService } from '../feedbackService';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback[] = [];
  router: any;

  constructor(private feedbackService: feedbackService) {}

  ngOnInit(): void {
    this.getFeedback();
  }

  public getFeedback() {
    this.feedbackService.getFeedbackList().subscribe(
      (data) => {
        this.feedback = data;
      },
      (error) => {
        console.error('Error deleting feedback:', error);
      }
    );
  }

  public deleteFeedback(id: number) {
    this.feedbackService.deleteFeedback(id).subscribe(
      () => {
        this.getFeedback;
      },
      (error) => {
        console.error('Error deleting tourist:', error);
      }
    );
  }

  public editItem(feedback: Feedback): void {
    this.feedbackService.updateFeedback(feedback).subscribe(() => {
      this.feedback;
    });
  }
}
