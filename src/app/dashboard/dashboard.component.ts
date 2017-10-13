import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from '../../services/hero.service';

@Component({
	selector : 'app-dashboard',
	templateUrl : './dashboard.component.html'
})

export class DashboardComponent {
	heroes : Hero[] = [];
	constructor(private heroService : HeroService) {}
	ngOnInit(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,5));
	}
}