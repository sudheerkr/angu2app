import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [HeroService]
})


export class AppComponent implements OnInit {
  constructor(private heroService : HeroService) {}
  title = 'app';
  heroes: Hero[];
  selectedHero : Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit() : void {
    this.getHeroes();
  }

}
