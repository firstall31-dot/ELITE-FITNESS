import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testimonialsData } from '../../data/testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-[#120807] relative overflow-hidden">
      <div class="absolute top-0 right-0 w-[32rem] h-[32rem] bg-primary-500/10 blur-[140px] pointer-events-none"></div>
      <div class="container-max mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24 items-start">
          <div>
            <span class="reference-kicker mb-5">The HIT community</span>
            <h2 class="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
              BUILT BY THE <span class="text-gradient">CLAN</span>
            </h2>
            <p class="text-white/60 text-lg leading-relaxed max-w-md">
              Real athletes, real progress, and a community that keeps showing up. This is what training with HIT feels like.
            </p>
            <div class="reference-rule mt-10 max-w-xs"></div>
            <div class="mt-5 text-white/40 text-xs uppercase tracking-[0.2em]">20,000+ athletes and counting</div>
          </div>

          <div class="relative">
            @for (testimonial of testimonials; track testimonial.name; let i = $index) {
              @if (activeIndex() === i) {
                <article class="reference-panel p-7 sm:p-10 md:p-12 min-h-[310px] animate-fade-in">
                  <div class="flex items-start justify-between gap-6 mb-8">
                    <div class="flex items-center gap-4">
                      <img [src]="testimonial.image" [alt]="testimonial.name" class="w-14 h-14 object-cover grayscale rounded-full border border-primary-500/50">
                      <div>
                        <h3 class="font-display text-xl text-white">{{ testimonial.name }}</h3>
                        <p class="text-primary-300/70 text-sm">{{ testimonial.role }}</p>
                      </div>
                    </div>
                    <div class="text-primary-500 text-3xl leading-none">“</div>
                  </div>
                  <p class="font-body text-white/80 text-xl leading-relaxed mb-8">“{{ testimonial.text }}”</p>
                  <div class="flex gap-1">
                    @for (star of [1,2,3,4,5]; track star) {
                      <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    }
                  </div>
                </article>
              }
            }

            <div class="flex items-center justify-between mt-6">
              <div class="flex gap-2">
                @for (testimonial of testimonials; track testimonial.name; let i = $index) {
                  <button
                    type="button"
                    (click)="setActiveIndex(i)"
                    [attr.aria-label]="'Show testimonial from ' + testimonial.name"
                    [class]="activeIndex() === i ? 'w-10 bg-primary-500' : 'w-3 bg-white/20 hover:bg-white/40'"
                    class="h-1 transition-all duration-300"
                  ></button>
                }
              </div>
              <div class="flex gap-2">
                <button type="button" (click)="prev()" aria-label="Previous testimonial" class="w-10 h-10 border border-white/20 text-white/60 hover:border-primary-500 hover:text-primary-400 transition-colors">←</button>
                <button type="button" (click)="next()" aria-label="Next testimonial" class="w-10 h-10 border border-white/20 text-white/60 hover:border-primary-500 hover:text-primary-400 transition-colors">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class TestimonialsComponent {
  activeIndex = signal(0);
  testimonials = testimonialsData;

  setActiveIndex(index: number) {
    this.activeIndex.set(index);
  }

  prev() {
    this.activeIndex.update(index => (index - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next() {
    this.activeIndex.update(index => (index + 1) % this.testimonials.length);
  }
}