import { Component, OnInit } from '@angular/core';
import { EmailDetails } from '../emailDetails';
import { emailDetailsService } from '../emailDetailsService';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit{
  emailDetails: EmailDetails= new EmailDetails();
  constructor(private emailDetailsService: emailDetailsService){}

  ngOnInit(): void {
  }
  saveEmailDetailsService(){
    this.emailDetailsService.createEmailDetails(this.emailDetails).subscribe(data=>{console.log(data)})
  }
  onSubmit(){
    this.saveEmailDetailsService();
    alert("Feedback Sent");
  }

  
  // goToemailServiceList(){
  //   this.router.navigate(['/EmailDetailsService']);
  // }
  // onSubmit(){
  //   console.log(this.emailDetailsService);
  //   alert("EmailDetailsService Registered Sucessfully ");
  //   this.saveemailService();
  //   console.log(this.emailDetailsService);
  // }
}
