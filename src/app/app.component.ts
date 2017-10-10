import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
            <app-heroes></app-heroes>`
})


export class AppComponent {
  title = 'Tour of Heroes';
}
