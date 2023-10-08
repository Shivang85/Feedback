import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackGivenComponent } from './feedback-given/feedback-given.component';
import { EmailComponent } from './email/email.component';
const routes: Routes = [
  {path: 'feedback', component: FeedbackComponent},
  {path:'feedback-given', component: FeedbackGivenComponent},
  {path:'email', component:EmailComponent},
  {path: '', redirectTo: 'feedback-given', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
