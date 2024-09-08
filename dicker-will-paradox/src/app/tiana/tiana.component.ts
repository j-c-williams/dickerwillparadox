import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-tiana',
  standalone: true,
  imports: [],
  templateUrl: './tiana.component.html',
  styleUrl: './tiana.component.css'
})
export class TianaComponent {
  correctAnswer: string = '556a207d8cfad5b60835a4d14d9fb03d5f1c695bcd50f88846c866923f9f0522';
  wrongAnswerText: string = ''
  
  @ViewChild('answerInput') answerInput!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.answerInput.nativeElement.focus();
    });
  }

  checkAnswer(inputValue: string) {
    const sanitizedInput = inputValue.trim().toLowerCase().replace(/\s+/g, '');
    const hashedInput = CryptoJS.SHA256(sanitizedInput).toString(CryptoJS.enc.Hex);
    this.wrongAnswerText = "";
    
    if (hashedInput === this.correctAnswer) {
      this.router.navigate(['../fin']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}