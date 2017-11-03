import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'
import { HeroService } from './hero.services'

@Component({
	selector: 'my-heroes',
	templateUrl: '/app/templates/index.html',
	styleUrls: ['app/style/hero-list.css'],
	

	// 	template: ``,
})

export class HeroComponent implements OnInit {

	// title: string = "Tour of Heroes";
	selectedHero: Hero;
	heroes: Hero[]=[];
	// newHeroName:string;

	constructor(private heroService: HeroService, private router: Router) { }

	getHeroes(): void {
		// this.heroes = this.heroService.getHeroes();
		this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	heroSelect(hero: Hero): void {

		this.selectedHero = hero;
		// console.log(hero);

	}

	gotoDetails(){

		this.router.navigate(['/details',this.selectedHero.id]);
	}

	addHero(name:string):void{

		// alert(name);
		this.heroService.addHero(name)
		.then(hero=>{
			this.heroes.push(hero);
			this.selectedHero=null;
			// this.newHeroName=null;
		});
	}

	deleteHero(hero:Hero):void{

		// console.log(hero);
		this.heroService.deleteHero(hero)
		.then(()=>this.heroes=this.heroes.filter(x=>x!==hero));

	}

}

