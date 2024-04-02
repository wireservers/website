import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ServicesSectionComponent } from './components/sections/services-section/services-section.component';
import { TechnologySectionComponent } from './components/sections/technology-section/technology-section.component';
import { TeamSectionComponent } from './components/sections/team-section/team-section.component';
import { ContactSectionComponent } from './components/sections/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavMenuComponent,
    HeaderComponent,
    ServicesSectionComponent,
    TechnologySectionComponent,
    TeamSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wireservers.com';
}
