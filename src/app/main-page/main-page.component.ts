import { Component, OnInit } from '@angular/core';
import{DataService} from'../../data.service';
import{SharingDataService} from '../sharing-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  message:string;
  data:Array<object>;
  
  constructor(
    private q:DataService,
    public dataService:SharingDataService
  ){
    this.data=[];
    this.gettodata();
  }
// get data from json
  gettodata():void{
    let path: string='../assets/data/All_prodducts.json';
    this.q.getData(path).subscribe(
      res=>{
        console.log(res);
        this.data=res;
      },
      err=>{}
      ,()=>{}
    );
  }
  ngOnInit() {}

  // SharingDataService: any;
  get datax():object { 
    return this.dataService.serviceData; 
  } 
  set datax(value: object) { 
    this.dataService.serviceData = value; 
  } 

  toggle(event,name,category,price,src,Desc):void{
    // console.log(event.target);
    // console.log(event.target.id);
    // console.log(name,category,price);
    this.dataService.transferObj={
      name,category,price,src,Desc

    }
    // console.log(this.dataService.transferObj);
  }
  // AddToSelectedProduct(name,category,price,src,Desc):void{
  //   this.dataService.selectedProducts=[
  //     {
  //       name:name,
  //       category:category,
  //       price:price,
  //       src:src,
  //       Desc:Desc
  //     }
  //   ]
  // }
 
}
