import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nyschool } from '../models/nyschools';
import { NyschoolserviceService } from '../services/nyschoolservice.service';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-schooldetails',
  templateUrl: './schooldetails.page.html',
  styleUrls: ['./schooldetails.page.scss'],
})
export class SchooldetailsPage implements OnInit {

  schoolIds: Nyschool[]=[];

  constructor(private router: ActivatedRoute, private service: NyschoolserviceService) {
   
   }

  ngOnInit() {
  
  // gettig the id from the url and passing it to the api to get the selected record
   const test = this.router.snapshot.params['id'];
   console.log(test);
   this.service.findSchoolById(test).subscribe(x=>{

     this.schoolIds.push(x);
    console.log(this.schoolIds);
    });
    

  }
  
  

}
