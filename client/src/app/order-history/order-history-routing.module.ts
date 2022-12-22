import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './order-history.component';


const routes: Routes = [
  {path: '', component: OrderHistoryComponent},
  {path: ':id', component: OrderDetailedComponent, data: {breadcrumb: {alias:'OrderDetailed'}}} 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderHistoryRoutingModule { }