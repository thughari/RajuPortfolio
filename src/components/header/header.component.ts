
import { ChangeDetectionStrategy, Component, signal, effect, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  
  navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
      effect(() => {
        // This effect will run when isMenuOpen changes
        // to handle body scroll lock
        if (this.isMenuOpen()) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      });
    }
  }

  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled.set(scrollPosition > 10);
    this.cdr.detectChanges();
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
