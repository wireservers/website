import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'templates', component: TemplatesComponent },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
];
