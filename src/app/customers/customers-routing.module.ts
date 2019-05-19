import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPhoneComponent } from './customer-phone/customer-phone.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'customerlist', pathMatch: 'full'
  },
  {
    path: 'customerlist',
    loadChildren: './customer-list/customer-list.module#CustomerListModule',
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
