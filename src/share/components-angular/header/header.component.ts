import {
  Component,
  input,
  computed,
  signal,
  DestroyRef,
  inject,
  PLATFORM_ID,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  LucideAngularModule,
  X,
  ChevronRight,
  Mail,
  MapPin,
  Home,
  UtensilsCrossed,
  BookOpen,
  PartyPopper,
  Compass,
  CalendarDays,
  Instagram,
  MessageCircleCode,
} from "lucide-angular";
import { RestaurantService } from "../../../menu-angular/core/services/restaurant.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  variant = input<"full" | "minimal">("full");

  isMenuOpen = signal(false);
  currentPath = signal("");

  private readonly restaurantService = inject(RestaurantService);

  // Lucide icons
  readonly X = X;
  readonly ChevronRight = ChevronRight;
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Home = Home;
  readonly UtensilsCrossed = UtensilsCrossed;
  readonly BookOpen = BookOpen;
  readonly PartyPopper = PartyPopper;
  readonly Compass = Compass;
  readonly CalendarDays = CalendarDays;
  readonly Instagram = Instagram;
  readonly MessageCircleCode = MessageCircleCode;

  navConfig = {
    logo: {
      src: "/fina-logo.svg",
      alt: "Fina Estampa Logo",
      width: 48,
      height: 48,
    },
    links: [
      {
        label: "Inicio",
        href: "/",
        icon: this.Home,
        subtitle: "Página principal",
      },
      {
        label: "Menú",
        href: "/menu-desayunos-cocteles",
        icon: this.UtensilsCrossed,
        subtitle: "Nuestras delicias",
      },
      {
        label: "Historia",
        href: "/historia-fina-estampa",
        icon: this.BookOpen,
        subtitle: "Nuestra trayectoria",
      },
      {
        label: "Eventos",
        href: "/eventos-cieneguilla",
        icon: this.PartyPopper,
        subtitle: "Celebraciones únicas",
      },
      {
        label: "La Fina",
        href: "#",
        icon: this.Compass,
        subtitle: "Sede Cieneguilla",
      },
      {
        label: "Contacto",
        href: "#",
        icon: this.Mail,
        subtitle: "Escríbenos",
      },
    ],
    cta: {
      label: "Reservaciones",
      href: "/contacto-fina-estampa",
      icon: this.CalendarDays,
    },
  };

  readonly socials = computed(() => {
    const socialMedia = this.restaurantService.socialMedia();
    return [
      {
        name: "Instagram",
        href: socialMedia?.instagram || "https://instagram.com/finaestampa",
        icon: this.Instagram,
      },
      {
        name: "WhatsApp",
        href: `https://wa.me/${this.restaurantService.whatsappConfig()?.number || "51942235532"}`,
        icon: this.MessageCircleCode,
      },
    ];
  });

  readonly contact = computed(() => ({
    email: "contacto@finaestampa.pe",
    phone: this.restaurantService.restaurant()?.phone || "+51 942 235 532",
    address: this.restaurantService.restaurant()?.address || "Cieneguilla, Lima, Perú",
  }));

  isMinimal = computed(() => this.variant() === "minimal");

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCurrentPath();

      // Listen for navigation changes using window.location
      const handleNavigation = () => {
        this.updateCurrentPath();
        this.closeMenu();
      };

      window.addEventListener("popstate", handleNavigation);
      this.destroyRef.onDestroy(() =>
        window.removeEventListener("popstate", handleNavigation),
      );

      // Close menu on Escape key press (accessibility best practice)
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && this.isMenuOpen()) {
          this.closeMenu();
        }
      };

      window.addEventListener("keydown", handleEscape);
      this.destroyRef.onDestroy(() =>
        window.removeEventListener("keydown", handleEscape),
      );
    }
  }

  updateCurrentPath() {
    if (isPlatformBrowser(this.platformId)) {
      this.currentPath.set(window.location.pathname.replace(/\/$/, ""));
    }
  }

  isLinkActive(href: string): boolean {
    const cleanHref = href.replace(/\/$/, "");
    return (
      this.currentPath() === cleanHref ||
      (href === "/" && this.currentPath() === "")
    );
  }

  openMenu() {
    this.isMenuOpen.set(true);
    document.body.style.overflow = "hidden";
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = "";
  }

  toggleMenu() {
    this.isMenuOpen() ? this.closeMenu() : this.openMenu();
  }
}
