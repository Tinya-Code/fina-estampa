import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  type OnDestroy,
  type AfterViewInit,
} from '@angular/core';
import { NgClass } from '@angular/common';

export interface HeroSlide {
  image: string;
  logo?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  ctaSecondary?: {
    text: string;
    link: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hero-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSliderComponent implements AfterViewInit, OnDestroy {
  slides = input<HeroSlide[]>([]);
  autoSlideInterval = input<number>(5000);
  overlay = input<boolean>(true);
  overlayOpacity = input<number>(0.4);

  currentIndex = signal(0);

  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private startAutoSlide(): void {
    if (this.slides().length <= 1) return;
    this.intervalId = setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.slides().length);
    }, this.autoSlideInterval());
  }

  private stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  isActive(index: number): boolean {
    return this.currentIndex() === index;
  }

}
