import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Nyschool } from "../models/nyschools";
import { NyschoolserviceService } from "../services/nyschoolservice.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {

  nyschoolsList: Array<Nyschool>;
  school:Nyschool;
  constructor(private nyservice: NyschoolserviceService, private router: Router) {

  }

  ngOnInit(): void {
  this.getAllSchools();
}


  getAllSchools() {
    return this.nyservice.listSchools().subscribe((x) => {
      this.nyschoolsList = x;
      
    });
  }

  getItem(schoolId: Nyschool){
    //Nagivating to the the details page of the selected school
       this.router.navigateByUrl(`schooldetails/${schoolId.id}`);

  }
  

  
  


  
}
