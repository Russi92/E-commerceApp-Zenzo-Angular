import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Cart } from './models/cart.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);

  cartDetails = signal<Cart>({} as Cart);

  ngOnInit(): void {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      this.getCartData();
    }
  }

  getCartData(): void {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.cartDetails.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeItem(id: string): void {
    this.cartService.removeProductItem(id).subscribe({
      next: (res) => {
        // console.log(res);
        this.cartDetails.set(res.data);
        this.cartService.cartCount.set(res.numOfCartItems);
      },
    });
  }

  update(id: string, count: number): void {
    if (count < 1) return;
    this.cartService.updateCartCount(id, count).subscribe({
      next: (res) => {
        // console.log(res);
        this.cartDetails.set(res.data);
      },
    });
  }

  removeAllItems(): void {
    this.cartService.clearCart().subscribe({
      next: (res) => {
        // console.log(res);
        this.cartDetails.set(res.data);
        this.cartService.cartCount.set(res.numOfCartItems);
      },
    });
  }
}
