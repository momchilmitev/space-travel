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
  currentDestination!: Destination;

  constructor (@Inject(DOCUMENT) private document: any, private destinationService: DestinationService) {
    this.document.body.classList = '';
    this.document.body.classList.add('destination')
  }
  ngOnInit (): void {
    this.getDestinations();
    this.currentDestination = this.destinstions[0]
  }

  getDestinations(): void {
    this.destinstions = this.destinationService.getDestinations();
  }

  changeDestination(index: number): void {
    this.currentDestination = this.destinstions[index];
  }
}
