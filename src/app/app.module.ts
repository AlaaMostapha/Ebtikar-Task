//modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Component, NgModule, VERSION} from '@angular/core'; 
//routing
import { RouterModule, Routes } from '@angular/router';
//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { MainPageComponent } from './main-page/main-page.component';
import{SubmitOrderComponent} from './submit-order/submit-order.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//fontawesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//services
import {DataService} from '../data.service';
import{SharingDataService}from'./sharing-data.service';


const appRoutes: Routes = [
  { path: 'AV', component: MainPageComponent,data: { title: 'Heroes List' } },
  { path: 'submitOrder', component: SubmitOrderComponent },
  {path: 'SelectedProduct', component: SelectedProductsComponent},
  {path: 'cardDetails', component: CardDetailsComponent},
  {path:'selectedProduct',component:SelectedProductsComponent}
 
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubmitOrderComponent,
    CardDetailsComponent,
    MainPageComponent,
    SelectedProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DataService,SharingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
