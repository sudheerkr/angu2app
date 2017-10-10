import { Injectable } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heroes';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		// simulate server with 2 secound latency
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(this.getHeroes());
			}, 2000)
		});
	}
}