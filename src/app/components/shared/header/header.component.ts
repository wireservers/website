import { Component, OnInit, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Router } from '@angular/router';

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
    console.log(section);
    this.navService.navigate(this.route.url, section);
  }
}
