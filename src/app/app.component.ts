import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'python-yatch';
  isNavbarVisible = true;
  showScrollTop = false;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Auto-hide navbar logic
    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      // Scrolling down
      this.isNavbarVisible = false;
    } else if (scrollTop < this.lastScrollTop) {
      // Scrolling up
      this.isNavbarVisible = true;
    }
    
    // Show scroll to top button after scrolling 300px
    this.showScrollTop = scrollTop > 300;
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
