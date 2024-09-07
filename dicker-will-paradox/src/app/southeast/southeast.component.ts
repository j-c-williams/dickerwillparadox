import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-southeast',
  standalone: true,
  imports: [],
  templateUrl: './southeast.component.html',
  styleUrl: './southeast.component.css'
})
export class SoutheastComponent {
  correctAnswer: string = '9409d68826fdb81945b7ffc4c8821e20da61464be2b738b910c834bd06eba39b';
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
