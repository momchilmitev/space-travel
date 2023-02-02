import { DOCUMENT } from "@angular/common";
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  constructor(@Inject(DOCUMENT) private document: any) {
    this.document.body.classList = '';
    this.document.body.classList.add('technology')
  }
}
