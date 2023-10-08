import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDetails } from './emailDetails';
@Injectable({
    providedIn: 'root',
  })
export class emailDetailsService{
    private baseUrl = 'http://localhost:8081/feed';
    constructor(private httpClient: HttpClient) {}

    createEmailDetails(emailDetails: EmailDetails): Observable<object> {
        return this.httpClient.post(`${this.baseUrl}/send`, emailDetails);
      }
}