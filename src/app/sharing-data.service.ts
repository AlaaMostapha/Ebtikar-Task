import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  serviceData: object; 
  transferObj:object;
  // selectedProducts:Array<object>;
  constructor() {
    this.serviceData={};
   }
  
}
