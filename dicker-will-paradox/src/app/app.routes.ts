import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StrikeComponent } from './strike/strike.component';
import { SoutheastComponent } from './southeast/southeast.component';
import { NineteenNinetyFiveComponent } from './nineteen-ninety-five/nineteen-ninety-five.component';
import { Rot14Component } from './rot14/rot14.component';
import { ApolloComponent } from './apollo/apollo.component';
import { ZuckerComponent } from './zucker/zucker.component';
import { LookComponent } from './look/look.component';
import { ChickenComponent } from './chicken/chicken.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'strike', component: StrikeComponent },
  { path: 'southeast', component: SoutheastComponent },
  { path: '1955', component: NineteenNinetyFiveComponent },
  { path: 'rot14', component: Rot14Component },
  { path: 'apollo', component: ApolloComponent },
  { path: 'zucker', component: ZuckerComponent },
  { path: 'look', component: LookComponent },
  { path: 'chicken', component: ChickenComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
