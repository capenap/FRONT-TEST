"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_products_1 = require('./mock-products');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Product Purchased';
        this.products = mock_products_1.products;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n <div class=\"container\">\n    \n    <h1>{{title}}</h1>\n    <ul class=\"products\">\n      <li *ngFor=\"let product of products\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\" style=\"background-color:lavender;\"><img src={{product.file}} class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"100\" height=\"100\"></div>\n          <div class=\"col-sm-4\" style=\"background-color:lavenderblush;\">{{product.name}}</div>\n          <div class=\"col-sm-4\" style=\"background-color:lavender;\">{{product.price}}</div>\n        </div>\n       </li>\n    </ul>\n   </div>\n   \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map