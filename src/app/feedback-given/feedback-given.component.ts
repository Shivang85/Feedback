import { Component, OnInit } from '@angular/core';
import {Feedback } from '../feedback';
import { feedbackService } from '../feedbackService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-given',
  templateUrl: './feedback-given.component.html',
  styleUrls: ['./feedback-given.component.css']
})
export class FeedbackGivenComponent implements OnInit{
  feedback: Feedback= new Feedback();
  constructor(private feedbackService: feedbackService, private router: Router){}

  ngOnInit(): void {
  }
  saveFeedback(){
    this.feedbackService.createFeedback(this.feedback).subscribe(data=>{console.log(data)})
    this.goTofeedbackList();
  }

  goTofeedbackList(){
    this.router.navigate(['/feedback']);
  }
  
  onSubmit(){
    console.log(this.feedback);
    alert("feedback Registered Sucessfully ");
    this.saveFeedback();
    console.log(this.feedback);
  }
}
