import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { LargeBtnComponent, TextComponent } from './components';


@NgModule({
  declarations: [
    HomeComponent,
    LargeBtnComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
