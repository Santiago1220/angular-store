import { Component } from "@angular/core";
import { ShoppingCartService } from "../components/header/services/shopping-cart.service";

@Component({
  selector: 'app-cart',
  template: `
  <ng-container *ngIf="{total: total$ | async, quantity: quantity$ | async} as dataCart">
    <ng-container *ngIf="dataCart.total">
      {{dataCart.total | currency}}
      ({{dataCart.quantity}})
    </ng-container>
    <mat-icon>shopping_cart</mat-icon>
  </ng-container>
  `
})

export class CartComponent {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc: ShoppingCartService){

  }
}
