import { Component, OnInit, inject } from '@angular/core';import { Router } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navService = inject(NavigationService);

  constructor(private route: Router) {}

  ngOnInit() {}

  navigate(section: string) {
    this.navService.navigate(this.route.url, section);
  }
}
