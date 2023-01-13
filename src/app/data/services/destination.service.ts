import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Destination } from '../types/destination'
import { DESTINATIONS } from '../mock-destinations'

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) { }

  getDestinations(): Destination[] {
    return DESTINATIONS;
  }
}