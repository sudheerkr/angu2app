import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
            <nav>
              <a routerLink="/heroes">Heroes</a>
              <a routerLink="/dashboard">Dashboard</a>
            </nav>
            <router-outlet></router-outlet>`
})


export class AppComponent {
  title = 'Tour of Heroes';
}
