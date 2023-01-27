import { CdkStepper } from '@angular/cdk/stepper';
import { ToastrService } from 'ngx-toastr';
import { IBasket } from './../../shared/models/basket';
import { BasketService } from './../../basket/basket.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
  }

  createPaymentIntent(){
    return this.basketService.createPaymentIntent().subscribe((response: any) => {
      this.appStepper.next(); 
    }, error => {
      console.log(error);
    });
  }

}
