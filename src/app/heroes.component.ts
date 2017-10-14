import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class HeroesComponent implements OnInit {
  constructor(private router : Router, private heroService : HeroService) {}
  title = 'heroes';
  heroes: Hero[];
  selectedHero : Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit() : void {
    this.getHeroes();
  }

}
