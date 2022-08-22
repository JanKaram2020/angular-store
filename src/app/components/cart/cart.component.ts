import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  submitted: boolean = false;
  form = {
    fullName: '',
    creditCard: '',
    address: '',
  };
  cart$: Array<{ id: number; quantity: number } & Product> = [];
  total: number = this.cart$.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  constructor(
    private store: Store<{
      cart: Array<{ id: number; quantity: number }>;
    }>,
    storeService: StoreService
  ) {
    store.pipe(select((s) => s)).subscribe((s) => {
      const items = s.cart.map((c) => {
        return {
          ...storeService.getProduct(c.id),
          quantity: c.quantity,
          id: c.id,
        };
      });
      this.cart$ = items;
      this.total =
        Math.round(
          items.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity;
          }, 0) * 100
        ) / 100;
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    this.submitted = true;
  }
}
