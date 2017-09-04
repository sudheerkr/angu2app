import { OnInit, Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'My First Angular App';
  hero: Hero = {
		id : 1,
		name : 'Windstorm'
	};
  heroes: Hero[];
	selectedHero : Hero;

  constructor(private heroService: HeroService) { }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() : void {
    this.getHeroes();
  }


	onSelect(hero : Hero) : void {
		this.selectedHero = hero;
	}
}
