import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin',
  standalone: true,
  imports: [],
  templateUrl: './fin.component.html',
  styleUrl: './fin.component.css'
})
export class FinComponent {
  constructor(private router: Router) {}

  restartGame() {
    this.router.navigate(['../strike'])
  }

  sendToLeaderboard() {
    this.router.navigate(['../leaderboard'])
  }
}
