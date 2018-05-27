import { Component, OnInit } from '@angular/core';
import{SharingDataService} from '../sharing-data.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  transferData:object;
  constructor(public dataService:SharingDataService){
    console.log(this.dataService.transferObj);
    this.transferData=this.dataService.transferObj;
  }
  get datax():object { 
    return this.dataService.serviceData; 
  } 
  set datax(value: object) { 
    this.dataService.serviceData = value; 
  } 
  ngOnInit() {}
  
}