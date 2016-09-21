import { Injectable } from '@angular/core';

import { Product } from './product';
import { products } from './mock-products';

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return products;
  }
}