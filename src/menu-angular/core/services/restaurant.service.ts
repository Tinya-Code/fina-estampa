import { Injectable, computed, inject, signal } from "@angular/core";
import type { RestaurantInfo } from "../models/restaurant.model";
import { MenuService } from "./menu.service";

@Injectable({
  providedIn: "root",
})
export class RestaurantService {
  private readonly menuService = inject(MenuService);

  // Internal state
  private readonly _restaurantInfo = signal<RestaurantInfo | null>(null);

  constructor() {
    this.loadRestaurantInfo();
  }

  private loadRestaurantInfo(): void {
    this.menuService.getRestaurantInfo().subscribe((info) => {
      this._restaurantInfo.set(info);
    });
  }

  // Exposed signals
  readonly restaurant = computed(() => this._restaurantInfo()?.data.restaurant);
  readonly settings = computed(() => this._restaurantInfo()?.data.settings);

  readonly orderConfig = computed(() => this.settings()?.order_config);
  readonly whatsappConfig = computed(() => this.settings()?.whatsapp_config);
  readonly businessConfig = computed(() => this.settings()?.business_config);
  readonly socialMedia = computed(() => this.businessConfig()?.social_media);
}
