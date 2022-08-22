import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../models/Product';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/store/actions';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  quantity: number = 1;
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.product = new Product();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        const product = this.storeService.getProduct(+id);
        if (product) {
          this.product = product;
        }
      }
    });
  }
  addToCart(id: Product['id']) {
    this.store.dispatch(addProduct({ id, quantity: +this.quantity }));
    alert('added to cart! ');
    this.quantity = 1;
  }
}
