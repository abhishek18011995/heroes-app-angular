import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService {

	private heroesUrl = 'api/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	// getHeroes(): Promise<Hero[]> {

	// 	return Promise.resolve(Heroes);
	// }

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response => response.json().data as Hero[]);
		// .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}



	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// Simulate server latency with 2 second delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	// getHero(id:number):Promise<Hero>{

	// 	return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
	// }

	getHero(id: number): Promise<Hero> {

		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
	}

	update(hero:Hero): Promise<Hero>{

		const url=`${this.heroesUrl}/${hero.id}`;
		return this.http.put(url,JSON.stringify(hero),{headers:this.headers}).toPromise().then(()=>hero);
	}

	addHero(name:string):Promise<Hero>{

		return this.http.post(this.heroesUrl,JSON.stringify({name}),{headers:this.headers}).toPromise().then((res)=>res.json().data as Hero).catch(this.handleError);;
	}

	deleteHero(hero:Hero):Promise<Hero>{
		const url=`${this.heroesUrl}/${hero.id}`;
		return this.http.delete(url,{headers:this.headers}).toPromise().then(()=>null);
	}

}