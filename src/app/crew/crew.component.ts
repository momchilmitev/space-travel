import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { CrewService } from "@services";
import { Member } from "@types";

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: Member[] = [];
  currentMember!: Member;
  currentIndex: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private crewService: CrewService
  ){
    this.document.body.classList = '';
    this.document.body.classList.add('crew');
  }

  ngOnInit (): void {
    this.getCrew();
    this.currentMember = this.crew[this.currentIndex];
  }

  getCrew(): void {
    this.crew = this.crewService.getCrew();
  }

  changeMember(index: number): void {
    this.currentMember = this.crew[index];
    this.currentIndex = index;
  }
}
