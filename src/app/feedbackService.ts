import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';
@Injectable({
  providedIn: 'root',
})
export class feedbackService {
  private baseUrl = 'http://localhost:8081/feed';

  constructor(private httpClient: HttpClient) {}

  getFeedbackList(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(`${this.baseUrl}/get`);
  }

  createFeedback(feedback: Feedback): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}/add`, feedback);
  }

  deleteFeedback(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateFeedback(feedback: Feedback): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/update`, feedback);
  }

}


