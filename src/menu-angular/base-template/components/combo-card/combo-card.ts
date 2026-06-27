import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { LucideAngularModule, Plus } from 'lucide-angular';
import { PrecioPipe } from '../../../core/pipes/precio.pipe';
import { AddButtonComponent } from '../add-button/add-button.component';
import { RestaurantService } from '../../../core/services/restaurant.service';
import { computed, inject, signal, effect } from '@angular/core';
import { PLATFORM_ID, inject as injectCore } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  url: string;
  cloudinary_id: string;
}

@Component({
  selector: 'app-combo-card',
  standalone: true,
  imports: [LucideAngularModule, PrecioPipe, AddButtonComponent],
  templateUrl: './combo-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboCardComponent {
  combo = input.required<Combo>();
  index = input.required<number>();
  addToCart = output<Combo>();

  private readonly restaurantService = inject(RestaurantService);
  private readonly platformId = injectCore(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly isDesktop = signal(false);

  constructor() {
    if (this.isBrowser) {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      this.isDesktop.set(mediaQuery.matches);
      
      const listener = (e: MediaQueryListEvent) => {
        this.isDesktop.set(e.matches);
      };
      
      mediaQuery.addEventListener('change', listener);
    }
  }

  readonly canOrder = computed(() => this.restaurantService.orderConfig()?.delivery_enabled ?? true);

  readonly clipPathClass = computed(() => {
    return this.index() % 2 === 0 
      ? '[clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]' 
      : '[clip-path:polygon(0_0,100%_0,80%_100%,20%_100%)]';
  });

  readonly translateValue = computed(() => {
    if (this.index() === 0) return '';
    const multiplier = this.isDesktop() ? 5 : 3;
    return `translateX(-${this.index() * multiplier}rem)`;
  });

private readonly colors = [
  'bg-accent',
  'bg-surface',
  'bg-background',
];

  readonly colorClass = computed(() => {
    return this.colors[this.index() % this.colors.length];
  });

  Plus = Plus;
}
