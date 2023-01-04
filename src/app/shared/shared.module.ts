import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
  ]
})
export class SharedModule { }
