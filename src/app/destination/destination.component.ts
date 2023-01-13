import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  constructor (@Inject(DOCUMENT) private document: any) {
    this.document.body.classList = '';
    this.document.body.classList.add('destination')
  }
}
