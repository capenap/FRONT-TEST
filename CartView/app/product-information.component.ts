import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product-information',
  template: `
    <div *ngIf="product">
      <h2>{{product.name}}</h2>
      <div><label>id: </label>{{product.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class ProductInformationComponent {
  
}
