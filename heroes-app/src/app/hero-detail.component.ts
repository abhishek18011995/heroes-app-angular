import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.services';
import 'rxjs/add/operator/switchMap';


import { Hero } from './hero'

@Component({
	selector: 'hero-detail',
	template: `
<div *ngIf="hero">

    <h2>{{hero.name}} details!</h2>
    <div>
        <label>id:</label>{{hero.id}}
    </div>
    <div>
        <label>name:</label>
        <input type="text" placeholder="name" [(ngModel)]="hero.name">
    </div>
    <button (click)="goBack()"> Back</button>
    <button (click)="save()"> Save</button>
</div>
  `,
  styleUrls:['./hero-detail.component.css'],
})

export class HeroDetailComponent {

	@Input() hero: Hero;

	constructor(
		private heroService: HeroService,
		private activatedRoute: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {

		this.activatedRoute.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero =>this.hero=hero);
	}

	goBack():void{

		this.location.back();
	}

	save():void{

		this.heroService.update(this.hero).then(()=>this.goBack());
	}

}
