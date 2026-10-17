import { Component, inject, input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../core/services/cart.service';


@Component({
  selector: 'app-card',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  private readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);

  prd = input.required<Product>();

  addToCart(id: string): void {
    if (localStorage.getItem('token')) {
      this.cartService.addProductToCart(id).subscribe({
        next: (res) => {
          this.cartService.cartCount.set(res.numOfCartItems);
          this.toastrService.success(res.message, 'Zenzo Store', {
            progressBar: true,
            closeButton: true,
          });
        },
      });
    } else {
      this.toastrService.warning('login first & try again', 'Zenzo Store', {
        progressBar: true,
        closeButton: true,
      });
    }
  }
}
