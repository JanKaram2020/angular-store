import { Injectable } from '@angular/core';
import data from 'src/assets/data.json';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}
  getProducts() {
    return data;
  }
  getProduct(id: number) {
    return data.find((product) => product.id === id) as Product;
  }
  getProductPrice(id: number) {
    return this.getProduct(id).price as number;
  }
}
