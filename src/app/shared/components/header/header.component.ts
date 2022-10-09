import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar>
    <a [routerLink]="['/']"><span><img src="../../assets/img/bag.png"> My Store</span></a>
    <app-cart (click)="goToCheckout()" class="mouseHover"></app-cart>
  </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private shoppingCartSvc: ShoppingCartService, private router: Router){
  }
  goToCheckout():void {
    this.router.navigate(['/checkout'])
  }

}
