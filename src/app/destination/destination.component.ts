import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { DestinationService } from'@services'
import { Destination } from '@types'

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinstions: Destination[] = [];

  constructor (@Inject(DOCUMENT) private document: any, private destinationService: DestinationService) {
    this.document.body.classList = '';
    this.document.body.classList.add('destination')
  }
  ngOnInit (): void {
    this.getDestinations();
  }

  getDestinations(): void {
    this.destinstions = this.destinationService.getDestinations();
  }
}
