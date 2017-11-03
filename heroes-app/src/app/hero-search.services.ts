import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()

export class HeroSearchService{

	constructor(private http:Http){}

	searchHero(name:string):Observable<Hero>{

		const url='app/heroes/${name}'
		this.http.get(url).map(response=>response.json().data as Hero[]);
	}
}