import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(@Inject(DOCUMENT) private document: any) {
    this.document.body.classList = '';
    this.document.body.classList.add('home')
  }
}
