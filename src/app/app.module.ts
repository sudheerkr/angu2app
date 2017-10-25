import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// imports for loading & configuring the in-memory web-api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { HeroService } from '../services/hero.service';
import { HeroSearchService } from '../services/hero-search.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from  './heroes.component';
import { HeroDetailComponent } from './herodetails/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './search/hero.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
