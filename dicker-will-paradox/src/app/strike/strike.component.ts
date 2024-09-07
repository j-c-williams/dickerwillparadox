import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-strike',
  standalone: true,
  imports: [],
  templateUrl: './strike.component.html',
  styleUrl: './strike.component.css'
})
export class StrikeComponent {
  correctAnswer: string = 'db78e454b34bf038335a67f11c370a872d2a4e4037b3d202e69617b658b881ec';
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
      this.router.navigate(['../southeast']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
