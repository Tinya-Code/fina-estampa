import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  input,
  signal,
  type OnInit,
  type AfterViewInit,
  type OnDestroy,
  PLATFORM_ID,
  HostListener,
  inject,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import GALLERY_IMAGES from "../../../data/events/gallery-images.json";

@Component({
  selector: "app-events-gallery",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./events-gallery.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsGalleryComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  title = input<string>("");
  subtitle = input<string>("");
  cta = input<{ text: string; link: string; icon?: string }>();

  readonly images = GALLERY_IMAGES.images;
  readonly N = this.images.length;
  selectedIndex = signal(Math.floor(this.N / 2));
  translateX = signal(0);
  isMobile = signal(false);
  failedImages = signal<Set<number>>(new Set());

  @ViewChild("container") container!: ElementRef<HTMLDivElement>;

  private autoScrollInterval: number | null = null;
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.checkViewport();
    this.startAutoScroll();
  }

  ngAfterViewInit() {
    setTimeout(() => this.expandImage(this.selectedIndex()), 100);
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  @HostListener("window:resize")
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    if (!isPlatformBrowser(this.platformId)) return;

    const wasMobile = this.isMobile();
    const nowMobile = window.innerWidth < 768;
    this.isMobile.set(nowMobile);

    if (wasMobile !== nowMobile && this.selectedIndex() !== -1) {
      setTimeout(() => this.expandImage(this.selectedIndex()), 50);
    }
  }

  expandImage(index: number) {
    const normalizedIndex =
      index < 0 ? this.N - 1 : index >= this.N ? 0 : index;
    this.selectedIndex.set(normalizedIndex);
    this.calculateOffset(normalizedIndex);
  }

  private calculateOffset(index: number) {
    if (!this.container?.nativeElement) return;

    const containerSize = this.isMobile()
      ? this.container.nativeElement.offsetHeight
      : this.container.nativeElement.offsetWidth;
    const itemOffset = index * 80;
    const centerOffset = (containerSize - 320) / 2;
    this.translateX.set(centerOffset - itemOffset);
  }

  autoScroll() {
    if (this.N === 0) return;
    this.expandImage((this.selectedIndex() + 1) % this.N);
  }

  startAutoScroll() {
    this.stopAutoScroll();
    this.autoScrollInterval = window.setInterval(() => this.autoScroll(), 3000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  onImageError(index: number) {
    console.error(
      `Failed to load image at index ${index}: ${this.images[index].src}`,
    );
    this.failedImages.update((set) => new Set(set).add(index));
  }

  hasImageFailed(index: number): boolean {
    return this.failedImages().has(index);
  }
}
