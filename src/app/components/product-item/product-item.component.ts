import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/store/actions';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 1;
  constructor(private store: Store) {
    this.product = new Product();
  }

  ngOnInit(): void {}
  addToCart(id: Product['id']) {
    this.store.dispatch(addProduct({ id, quantity: +this.quantity }));
    alert('added to cart!');
    this.quantity = 1;
  }
}
