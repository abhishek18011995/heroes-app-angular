import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.services'

@NgModule({
	imports: [BrowserModule, FormsModule,HttpModule,AppRoutingModule,  InMemoryWebApiModule.forRoot(InMemoryDataService),],
	declarations: [AppComponent, HeroComponent, HeroDetailComponent, DashboardComponent],
	providers: [HeroService],
	bootstrap: [AppComponent]
})
export class AppModule { }
