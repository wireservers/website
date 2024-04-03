import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  isExpanded = false;
  navService = inject(NavigationService);

  constructor(private route: Router) {}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  navigate(section: string) {
    this.navService.navigate(this.route.url, section);
  }
}
