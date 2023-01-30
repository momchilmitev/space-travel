import { Injectable } from '@angular/core';

import { Destination } from '../types/destination'
import { DESTINATIONS } from '../mock-destinations'

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor() { }

  getDestinations(): Destination[] {
    return DESTINATIONS;
  }
}