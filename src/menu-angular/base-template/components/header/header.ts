import {
  ChangeDetectionStrategy,
  Component,
  inject,
  computed,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  LucideAngularModule,
  Utensils,
  MapPin,
  Info,
  Images,
  Copy,
  Map,
} from "lucide-angular";
import { ShareButtonComponent } from "../../../components/share-button/share-button.component";
import { RestaurantService } from "../../../core/services/restaurant.service";

@Component({
  selector: "app-template-header",
  standalone: true,
  imports: [LucideAngularModule, ShareButtonComponent],
  template: `
    <header
      class="relative font-display w-full justify-around flex flex-col max-h-100 h-60 md:h-100  bg-surface overflow-hidden"
    >
      <!-- Clip Path -->
      <svg
        width="0"
        height="0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="absolute "
      >
        <defs>
          <clipPath id="left-block-curve" clipPathUnits="objectBoundingBox">
            <path
              d="M0,0 V1 H0.915 c0,0 0.19,-0.242 0,-0.5 -0.205,-0.303 0,-0.5 0,-0.5 z"
            />
          </clipPath>
        </defs>
      </svg>

      <!-- Fondo Desktop -->
      <div
        class="absolute items-center  justify-end right-0 top-0 w-[60%] h-full z-0 "
      >
        <img
          src="/images/portada-menu-1.png"
          alt="Fina Estampa"
          class="absolute  w-full h-full object-center object-cover"
        />
      </div>

      <!-- Sección de Información -->
      <div
        class="w-3/5 h-full z-10 relative flex flex-col items-end-safe justify-center md:justify-evenly  px-4 md:px-12 lg:px-16 bg-surface"
        style="clip-path: url(#left-block-curve)"
      >
        <div
          class="flex flex-col max-w-2xl mx-auto  justify-center items-center gap-4 "
        >
          <div class="flex flex-col pr-6 items-center">
            <img
              src="/images/fina-letra-logo.svg"
              alt="Fina Estampa"
              class="w-full h-auto   object-contain"
            />
            <p
              class="text-primary text-lg md:text-xl leading-relaxed tracking-widest"
            >
              COCINA CRIOLLA
            </p>
          </div>

          <h1
            class=" text-left hidden  text-5xl md:text-7xl font-display text-primary leading-none mb-4"
          >
            {{ restaurantName() }}<br />
          </h1>
        </div>

        <div class="flex flex-col justify-center mx-auto max-w-md  w-full">
          <div
            class="flex w-full hidden md:flex items-center justify-start text-primary/80 md:text-xl md:mb-6 gap-2"
          >
            <lucide-icon [img]="MapPin" class="w-5 h-5"></lucide-icon>
            <span>{{ address() }}</span>
            <button
              (click)="openMaps()"
              title="Ver en Google Maps"
              class="hover:text-accent/70 hover:scale-110 transition-all"
            >
              <lucide-icon [img]="Map" class="w-5 h-5"></lucide-icon>
            </button>
          </div>
          <app-share-button class="hidden md:flex"></app-share-button>
        </div>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeader {
  readonly _restaurantService = inject(RestaurantService);
  private readonly router = inject(Router, { optional: true });
  private readonly route = inject(ActivatedRoute, { optional: true });

  readonly restaurantName = computed(
    () => this._restaurantService.restaurant()?.name ?? "Mr Sushi",
  );
  readonly description = computed(
    () => this._restaurantService.settings()?.description ?? "",
  );
  readonly address = computed(
    () => this._restaurantService.restaurant()?.address ?? "",
  );
  readonly location = computed(
    () => this._restaurantService.restaurant()?.location,
  );

  readonly isMenuRoute = computed(
    () => this.router?.url !== "/" && this.router?.url !== "",
  );

  readonly Utensils = Utensils;
  readonly MapPin = MapPin;
  readonly Info = Info;
  readonly Images = Images;
  readonly Copy = Copy;
  readonly Map = Map;

  copyAddress() {
    navigator.clipboard.writeText(this.address());
  }

  openMaps() {
    const loc = this.location();
    let url = "";

    if (loc && loc.lat && loc.lng) {
      url = `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
    } else {
      url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.address())}`;
    }

    window.open(url, "_blank");
  }
}
