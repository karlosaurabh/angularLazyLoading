import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerOneComponent } from './pages/customer-one/customer-one.component';
import { CustomerTwoComponent } from './pages/customer-two/customer-two.component';
import { CustomerThreeComponent } from './pages/customer-three/customer-three.component';
import { CustomerListComponent } from './customer-list.component';

const routes: Routes = [
  {
    path: '',            //<---- parent component declared here
    component: CustomerListComponent,
    children: [                          //<---- child components declared here
        {
            path:'customer1',
            component: CustomerOneComponent
        },
        {
            path:'customer2',
            component: CustomerTwoComponent
        },
        {
            path:'customer3',
            component: CustomerThreeComponent
        }
       
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerListRoutingModule { }
