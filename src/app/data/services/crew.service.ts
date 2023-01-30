import { Injectable } from '@angular/core';

import { Member } from '@types'
import { CREW } from '../mock-crew'

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor() { }

  getCrew(): Member[] {
    return CREW;
  }
}
