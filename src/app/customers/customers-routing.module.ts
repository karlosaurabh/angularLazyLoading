import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPhoneComponent } from './customer-phone/customer-phone.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'phone', pathMatch: 'full'
  },
  {
    path: 'customerlist',
    loadChildren: './customer-list/customer-list.module#CustomerListComponent',
  },
  {
    path: 'phone',
    component: CustomerPhoneComponent,

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
