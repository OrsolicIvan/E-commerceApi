import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrderHistoryService } from '../order-history.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss'],
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private ordersService: OrderHistoryService
  ) {
    this.breadcrumbService.set('@OrderDetailed', '');
  }

  ngOnInit() {
    this.ordersService.getOrderDetailed(+ this.route.snapshot.paramMap.get('id')).subscribe((order: IOrder) => {
      this.order = order;
      this.breadcrumbService.set('@OrderDetailed', `Narudžba # ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }
}
