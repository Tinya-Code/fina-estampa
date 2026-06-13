import { Component, inject, signal, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../menu-angular/core/services/menu.service';
import { Cart } from '../../../menu-angular/core/services/cart.service';
import type { Product } from '../../../menu-angular/core/models/product.model';
import { TemplateCardComponent } from '../../../menu-angular/base-template/components/template-card/template-card';
import { LayoutScaleComponent } from "../../../menu-angular/layout/layout-scale/layout-scale";
@Component({
  selector: 'app-recommended-menu',
  standalone: true,
  imports: [CommonModule, TemplateCardComponent, LayoutScaleComponent],
  template: `
  
    <app-layout-scale>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      @for (product of recommendedProducts(); track product.id) {
        <app-template-card
          [product]="product"
          (productClick)="onProductClick($event)"
          (addToCart)="onAddToCart($event)"
        >
        </app-template-card>
      }
    </div>
    </app-layout-scale>
  `,
})
export class RecommendedMenuComponent implements OnInit {
  private readonly menuService = inject(MenuService);
  private readonly cartService = inject(Cart);

  readonly recommendedProducts = signal<Product[]>([]);

  ngOnInit(): void {
    this.menuService.getRecommended().subscribe((res) => {
      if (res && Array.isArray(res.data)) {
        this.recommendedProducts.set(res.data);
      }
    });
  }

  onProductClick(product: Product): void {
    this.cartService.addItem(product as any, 1);
  }

  onAddToCart(product: Product): void {
    this.cartService.addItem(product as any, 1);
  }
}
