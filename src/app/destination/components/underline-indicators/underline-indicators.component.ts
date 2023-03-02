import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { Destination } from '@types'

@Component({
  selector: 'app-underline-indicators',
  templateUrl: './underline-indicators.component.html',
  styleUrls: ['./underline-indicators.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnderlineIndicatorsComponent {
  @Input() destinations!: Destination[];
  @Input() currentIndex!: number;
  @Output() changeDestination = new EventEmitter();
}
