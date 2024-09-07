import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}

  startGame(): void {
    this.router.navigate(['/strike']);
  }

  sendToLeaderboard(): void {
    this.router.navigate(['/leaderboard'])
  }
}
