import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-zero-one-zero',
  standalone: true,
  imports: [],
  templateUrl: './zero-one-zero.component.html',
  styleUrl: './zero-one-zero.component.css'
})
export class ZeroOneZeroComponent {
  correctAnswer: string = 'ecfca790327f25b9797ec0d19ed1b0c33cb2eca57cd456f290038fdcb12531a3';
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
      console.log('Correct answer!');
      this.router.navigate(['../landing']);
    } else if (hashedInput === 'dd76d302447e883a4e9ab7306eaadbd2fc27a43fff78dcef737c2025607bbd6b') {
      console.log('Incorrect answer.');
      this.wrongAnswerText = "Close, try decimal instead of ascii.";
    } else {
      console.log('Incorrect answer.');
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
