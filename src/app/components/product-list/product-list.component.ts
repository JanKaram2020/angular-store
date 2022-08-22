import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private storeService: StoreService) {}
  products: {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
  }[] = [];
  ngOnInit(): void {
    this.products = this.storeService.getProducts();
  }
}
