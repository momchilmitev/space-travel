import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from '@angular/core';

import { TechnologyService } from "@services";
import { Technology } from "@types";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologies: Technology[] = [];
  currentTechnology!: Technology;
  currentIndex: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private technologyService: TechnologyService
  ) {
    this.document.body.classList = '';
    this.document.body.classList.add('technology')
  }

  ngOnInit (): void {
    this.getTechnologies();
    this.currentTechnology = this.technologies[this.currentIndex];
  }

  getTechnologies(): void {
    this.technologies = this.technologyService.getTechnology();
  }

  changeTechnology(index: number): void {
    this.currentTechnology = this.technologies[index];
    this.currentIndex = index;
  }

}
