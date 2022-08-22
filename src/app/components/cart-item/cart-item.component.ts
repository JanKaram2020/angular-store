import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { Store } from '@ngrx/store';
import { changeProductQuantity } from '../../store/actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: { quantity: number } & Product = {
    ...new Product(),
    quantity: 0,
  };
  constructor(private store: Store) {}

  ngOnInit(): void {}

  changeProductQuantity(event: any) {
    console.log(event.target.valueAsNumbder);
    this.store.dispatch(
      changeProductQuantity({
        id: this.item.id,
        quantity: event.target.value,
      })
    );
    if (event.target.valueAsNumber === 0) {
      alert('removed from cart!');
    }
  }
}
