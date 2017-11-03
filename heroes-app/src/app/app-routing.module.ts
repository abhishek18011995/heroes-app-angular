import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full',
	},

	{
		path: 'heroes',
		component: HeroComponent
	}, {
		path: 'dashboard',
		component: DashboardComponent
	}, {
		path: 'details/:id',
		component: HeroDetailComponent

	}
];

// @NgModule({
// 	imports: [RouterModule.forRoot(routes)],
// 	exports: [RouterModule]
// })

// export class AppRoutingModule { }
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}