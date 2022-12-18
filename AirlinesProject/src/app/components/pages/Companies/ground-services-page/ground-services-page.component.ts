import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-ground-services-page',
  templateUrl: './ground-services-page.component.html',
  styleUrls: ['./ground-services-page.component.scss']
})
export class GroundServicesPageComponent implements OnInit {
  isLoading:boolean = true
  groundServices:Company[] = []
  displayedColumns: string[] = ['name', 'city', 'country','contactName','contactNumber'];
  
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getAirportManagements()
  }

  getAirportManagements(){
    this.companyService.getAll("GroundServices").subscribe(data=>{  
      this.groundServices = data
      this.isLoading = false
    })
  }

}
