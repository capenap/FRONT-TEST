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
      <li *ngFor="let product of products; let i = index; trackBy: trackByFn">
        <div class="responsive">
          <div class="img">
            <img src={{product.file}} alt={{product.name}} class="img-thumbnail" width="100" height="100">
            <div class="desc">{{i+1}} {{product.price}}$</div>
          </div>
        </div>
       </li>
    </ul>
   </div>
   
   <h1>{{i}}</h1>
    `,
 
styles: [`

padding:0;
margin:0;

.products li:hover {
      color: #607D8B;
      background-color: #333;
      left: .1em;
     
    }

div.container {
  width:95%;
  margin:auto;
}

div.img:hover {
    -webkit-filter: brightness(110%);
    filter: brightness(110%);
}

ul.products {
  list-style:none;
  overflow:hidden;
}

 div.img {
    border: 2px solid #ccc;
}

div.img:hover {
    border: 1px solid #777;
}

div.img img {
    width: 100%;
    height: auto;
}

div.desc {
    padding: 15px;
    text-align: center;
}

* {
    box-sizing: border-box;
}

.responsive {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
}

@media only screen and (max-width: 700px){
    .responsive {
        width: 49.99999%;
        margin: 6px 0;
    }
}

@media only screen and (max-width: 500px){
    .responsive {
        width: 100%;
    }
}

`]

})
export class AppComponent {
  title = 'Product Purchased';
  products = products;
    
}