import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPhoneComponent } from './customer-phone/customer-phone.component';
import { CustomerListRoutingModule } from './customer-list/customer-list-routing.module';
import { CustomerListModule } from './customer-list/customer-list.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    // CustomerListRoutingModule,
    CustomerListModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerPhoneComponent
  ]
})
export class CustomersModule { }
