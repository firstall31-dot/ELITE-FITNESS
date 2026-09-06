import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { statsData } from '../../data/stats.data';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-12 md:py-16 bg-[#1a0807] border-y border-primary-500/30">
      <!-- Red glow effect -->
       <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-500/10"></div>
      
      <div class="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-0">
          @for (stat of stats; track stat.label; let i = $index) {
            <div 
              class="text-center animate-on-scroll-scale md:border-r md:border-white/15 last:border-r-0 px-4"
              [class]="'stagger-' + (i + 1)"
            >
              <div class="font-black text-4xl sm:text-5xl md:text-6xl tracking-[-0.08em] text-white mb-2">
                {{ stat.value }}
              </div>
              <div class="text-primary-300/80 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
                {{ stat.label }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class StatsComponent {
  stats = statsData;
}
