import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-rot14',
  standalone: true,
  imports: [],
  templateUrl: './rot14.component.html',
  styleUrl: './rot14.component.css'
})
export class Rot14Component {
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
