import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListRoutingModule } from './customer-list-routing.module';
import { CustomerOneComponent } from './pages/customer-one/customer-one.component';
import { CustomerTwoComponent } from './pages/customer-two/customer-two.component';
import { CustomerThreeComponent } from './pages/customer-three/customer-three.component';
import { CustomerListComponent } from './customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerListRoutingModule
  ],
  declarations: [CustomerOneComponent, CustomerTwoComponent, CustomerThreeComponent,CustomerListComponent]
})
export class CustomerListModule { }
