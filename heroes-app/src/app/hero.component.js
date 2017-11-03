"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_services_1 = require("./hero.services");
var HeroComponent = (function () {
    // newHeroName:string;
    function HeroComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroes = [];
    }
    HeroComponent.prototype.getHeroes = function () {
        var _this = this;
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroComponent.prototype.heroSelect = function (hero) {
        this.selectedHero = hero;
        // console.log(hero);
    };
    HeroComponent.prototype.gotoDetails = function () {
        this.router.navigate(['/details', this.selectedHero.id]);
    };
    HeroComponent.prototype.addHero = function (name) {
        var _this = this;
        // alert(name);
        this.heroService.addHero(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
            // this.newHeroName=null;
        });
    };
    HeroComponent.prototype.deleteHero = function (hero) {
        var _this = this;
        // console.log(hero);
        this.heroService.deleteHero(hero)
            .then(function () { return _this.heroes = _this.heroes.filter(function (x) { return x !== hero; }); });
    };
    return HeroComponent;
}());
HeroComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: '/app/templates/index.html',
        styleUrls: ['app/style/hero-list.css'],
    }),
    __metadata("design:paramtypes", [hero_services_1.HeroService, router_1.Router])
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map