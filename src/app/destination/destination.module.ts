import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';
import { UnderlineIndicatorsComponent } from './components'


@NgModule({
  declarations: [
    DestinationComponent,
    UnderlineIndicatorsComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule
  ]
})
export class DestinationModule { }
