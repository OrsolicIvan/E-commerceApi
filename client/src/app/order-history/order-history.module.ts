import { OrderHistoryComponent } from './order-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';


@NgModule({
  declarations: [OrderHistoryComponent, OrderDetailedComponent],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    SharedModule
  ]
})
export class OrderHistoryModule { }
