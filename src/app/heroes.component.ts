import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'My First Angular App';
  hero: Hero = {
		id : 1,
		name : 'Windstorm'
	};
  heroes: Hero[];
	selectedHero : Hero;

  constructor(private router: Router, private heroService: HeroService) { }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() : void {
    this.getHeroes();
  }


	onSelect(hero : Hero) : void {
		this.selectedHero = hero;
	}

  gotoDetail() : void {
	  this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
