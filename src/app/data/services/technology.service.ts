import { Injectable } from '@angular/core';

import { Technology } from '@types';
import { TECHNOLOGY } from '../mock-technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  constructor() { }

  getTechnology(): Technology[] {
    return TECHNOLOGY;
  }
}
