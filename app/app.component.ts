import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service'
import { products } from './mock-products';


@Component({
  selector: 'my-app',
  template: `
 <div class="container">
    
    <h1>{{title}}</h1>
    <ul class="products">
      <li *ngFor="let product of products">
        <div class="row">
          <div class="col-sm-4" style="background-color:lavender;"><img src={{product.file}} class="img-thumbnail" alt="Cinque Terre" width="100" height="100"></div>
          <div class="col-sm-4" style="background-color:lavenderblush;">{{product.name}}</div>
          <div class="col-sm-4" style="background-color:lavender;">{{product.price}}</div>
        </div>
       </li>
    </ul>
   </div>
   
    `,
 
})
export class AppComponent {
  title = 'Product Purchased';
  products = products;
    
}