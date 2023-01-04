import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
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
    HomeRoutingModule,
  ],
})
export class HomeModule { }
