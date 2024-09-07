import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StrikeComponent } from './strike/strike.component';
import { SoutheastComponent } from './southeast/southeast.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'strike', component: StrikeComponent },
  { path: 'southeast', component: SoutheastComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
