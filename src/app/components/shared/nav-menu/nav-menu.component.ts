import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation.service';

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
