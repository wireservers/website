import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: number = 0;

  constructor() {}

  ngOnInit() {
    this.year = new Date().getFullYear();
  }
}
