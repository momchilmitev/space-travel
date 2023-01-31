import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent {
  constructor(
    @Inject(DOCUMENT) private document: any
  ){
    this.document.body.classList = '';
    this.document.body.classList.add('crew')
  }
}
