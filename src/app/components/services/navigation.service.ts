import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}

  navigate(routerLink: string, section: string = '') {
    const navigateToNewWithUser: NavigationExtras = {
      fragment: section,
    };
    window.location.hash = '';
    window.location.hash = section;

    // this.router.navigate([routerLink], navigateToNewWithUser);
  }
}
