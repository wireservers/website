import { Component } from '@angular/core';
import { AboutSectionComponent } from '../sections/about-section/about-section.component';
import { ClientsSectionComponent } from '../sections/clients-section/clients-section.component';
import { ContactSectionComponent } from '../sections/contact-section/contact-section.component';
import { PortfolioSectionComponent } from '../sections/portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from '../sections/services-section/services-section.component';
import { TeamSectionComponent } from '../sections/team-section/team-section.component';
import { TechnologySectionComponent } from '../sections/technology-section/technology-section.component';

@Component({
  standalone: true,
  imports: [
    AboutSectionComponent,
    ClientsSectionComponent,
    ContactSectionComponent,
    PortfolioSectionComponent,
    ServicesSectionComponent,
    TeamSectionComponent,
    TechnologySectionComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
