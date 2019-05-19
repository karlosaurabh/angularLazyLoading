import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
// import { CustomerListRoutingModule } from './customer-list/customer-list-routing.module';
import { CustomerListModule } from './customer-list/customer-list.module';

import { CustomerPhoneComponent } from './customer-phone/customer-phone.component';



@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CustomerListModule
  ],
  declarations: [
    CustomerPhoneComponent
  ]
})
export class CustomersModule { }
