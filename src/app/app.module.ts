import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from '../services/hero.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from  './heroes.component';
import { HeroDetailComponent } from './herodetails/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    	{
    	path : 'heroes',
    	component : HeroesComponent
    	},
    	{
    	path : 'dashboard',
    	component : DashboardComponent
    	},
    	{
    	path : 'detail/:id',
    	component : HeroDetailComponent
    	},
    	{
    	path : '',
    	redirectTo : '/dashboard',
    	pathMatch : 'full'
    	}
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
