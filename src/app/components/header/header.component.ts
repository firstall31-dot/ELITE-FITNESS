import { Component, signal, HostListener, OnInit } from '@angular/core';
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
            <div class="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:rotate-3">
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
          
          <div class="hidden lg:flex items-center gap-3">
            <button
              type="button"
              class="theme-toggle"
              [class.is-light]="isLightMode()"
              (click)="toggleTheme()"
              [attr.aria-pressed]="isLightMode()"
              [attr.aria-label]="isLightMode() ? 'Switch to dark mode' : 'Switch to light mode'"
              [attr.title]="isLightMode() ? 'Switch to dark mode' : 'Switch to light mode'"
            >
              <svg class="theme-toggle__icon theme-toggle__icon--moon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
              <svg class="theme-toggle__icon theme-toggle__icon--sun" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3.5" stroke-width="1.8" />
                <path stroke-linecap="round" stroke-width="1.8" d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
              </svg>
            </button>
            <a routerLink="/contact" class="btn-primary">Book a Spot</a>
          </div>
          
           <div class="lg:hidden flex items-center gap-2">
             <button
               type="button"
               class="theme-toggle"
               [class.is-light]="isLightMode()"
               (click)="toggleTheme()"
               [attr.aria-pressed]="isLightMode()"
               [attr.aria-label]="isLightMode() ? 'Switch to dark mode' : 'Switch to light mode'"
             >
               <svg class="theme-toggle__icon theme-toggle__icon--moon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
               </svg>
               <svg class="theme-toggle__icon theme-toggle__icon--sun" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <circle cx="12" cy="12" r="3.5" stroke-width="1.8" />
                 <path stroke-linecap="round" stroke-width="1.8" d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
               </svg>
             </button>
             <button class="w-10 h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center cursor-pointer hover:border-primary-500 transition-colors" (click)="toggleMobileMenu()">
               <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
             </button>
           </div>
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
export class HeaderComponent implements OnInit {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isLightMode = signal(false);

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/services', label: 'Services', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  ngOnInit() {
    try {
      this.setTheme(localStorage.getItem('hit-theme') === 'light');
    } catch {
      this.setTheme(false, false);
    }
  }

  toggleTheme() {
    this.setTheme(!this.isLightMode());
  }

  private setTheme(isLight: boolean, persist = true) {
    this.isLightMode.set(isLight);
    document.documentElement.classList.toggle('theme-light', isLight);
    if (persist) {
      try {
        localStorage.setItem('hit-theme', isLight ? 'light' : 'dark');
      } catch {
        // Theme still applies for the current session when storage is unavailable.
      }
    }
  }

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
