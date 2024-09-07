import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-nineteen-ninety-five',
  standalone: true,
  imports: [],
  templateUrl: './nineteen-ninety-five.component.html',
  styleUrl: './nineteen-ninety-five.component.css'
})
export class NineteenNinetyFiveComponent {
  correctAnswer: string = 'b82e723b461323374c1eec211e066dc7a1c2130fe36c906e4bec5cc45109c248';
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
      this.router.navigate(['../']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
