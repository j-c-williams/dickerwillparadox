import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-look',
  standalone: true,
  imports: [],
  templateUrl: './look.component.html',
  styleUrl: './look.component.css'
})
export class LookComponent {
  correctAnswer: string = '9628da467e8546f410babd58cb723e251ac177e5abdedcd99c75751fd46e86c3';
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
    
    if (hashedInput === this.correctAnswer || hashedInput === '3f0dcb460750b46cc5ed95bf5b29bfb67ce3d561a2e4251fb316420f123acd0c') {
      this.router.navigate(['../']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
