import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hero } from '../app/hero';
//import { HEROES } from '../app/mock-heroes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	
	private heroesUrl = 'api/heroes';
	constructor(private http : Http) {}

//	getHeroes(): Promise<Hero[]> {
//		return Promise.resolve(HEROES);
//	}

	
	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
		.toPromise()
		.then(response => response.json().data as Hero[])
		.catch(this.handleError);
	}

	private handleError(error : any) : Promise<any> {
		console.error('An Error occured', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	getHero(id : number) : Promise<Hero>{
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
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