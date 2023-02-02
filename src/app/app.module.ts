import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewModule } from './crew';
import { DestinationModule } from './destination/destination.module';
import { HomeModule } from './home';
import { SharedModule } from './shared';
import { TechnologyModule } from './technology';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CrewModule,
    DestinationModule,
    HomeModule,
    HttpClientModule,
    SharedModule,
    TechnologyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
