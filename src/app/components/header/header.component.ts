import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/90 backdrop-blur-md border-b border-white/10">
      <nav class="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-[76px]">
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:rotate-3">
              <span class="font-black text-sm tracking-[-0.08em] text-white">HIT</span>
            </div>
            <span class="font-black text-sm tracking-[0.18em] hidden sm:block text-white uppercase">HIT Egypt</span>
          </a>
          
          <div class="hidden lg:flex items-center gap-9">
            <a *ngFor="let link of navLinks" 
               [routerLink]="link.path" 
               routerLinkActive="!text-white/80 text-primary-500" 
               [routerLinkActiveOptions]="{ exact: link.exact }"
               class="text-white/60 hover:text-primary-400 transition-colors duration-300 font-semibold text-[11px] uppercase tracking-[0.18em]">
              {{ link.label }}
            </a>
          </div>
          
          <div class="hidden lg:block">
            <a routerLink="/contact" class="btn-primary">Book a Spot</a>
          </div>
          
           <button class="lg:hidden w-10 h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center cursor-pointer hover:border-primary-500 transition-colors" (click)="toggleMobileMenu()">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      
       <div *ngIf="isMobileMenuOpen()" class="lg:hidden bg-black/98 backdrop-blur-lg border-t border-white/10">
        <div class="container-max mx-auto px-4 py-6 flex flex-col gap-4">
          <a *ngFor="let link of navLinks" 
             [routerLink]="link.path" 
             routerLinkActive="!text-white/80 text-primary-500" 
             [routerLinkActiveOptions]="{ exact: link.exact }"
             class="text-sm text-white/80 hover:text-primary-500 py-2 transition-colors duration-300 font-semibold uppercase tracking-[0.16em]"
             (click)="closeMobileMenu()">
            {{ link.label }}
          </a>
          <a routerLink="/contact" 
             class="btn-primary text-center mt-4"
             (click)="closeMobileMenu()">
             Book a Spot
          </a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/services', label: 'Services', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
