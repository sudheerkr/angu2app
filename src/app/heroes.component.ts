import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class HeroesComponent implements OnInit {
  constructor(private heroService : HeroService) {}
  title = 'heroes';
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
