import { Component, OnInit } from '@angular/core';
import{DataService} from'../../data.service';
@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {

  data:Array<object>;
  constructor(
    private q:DataService
  ){
    this.data=[];
    this.gettodata();
  }

  gettodata():void{
    let path: string='../assets/data/selectedProducted.json';
    this.q.getData(path).subscribe(
      res=>{
        console.log(res);
        this.data=res;
       
      },
      err=>{}
      ,()=>{}
    );
  }

  ngOnInit() {
  }

}
