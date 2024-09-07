import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-zucker',
  standalone: true,
  imports: [],
  templateUrl: './zucker.component.html',
  styleUrl: './zucker.component.css'
})
export class ZuckerComponent {
  correctAnswer: string = '38736cd1e56de7bc1a83ecbce276a5ba8d486a6420b02c441c4de3eed9070546';
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
    
    if (hashedInput === this.correctAnswer || hashedInput === 'f775b1b03b0f00dd8b29eb30c2af5883bf328b8192797345a68a384e966327a4') {
      this.router.navigate(['../']);
    } else if (hashedInput === 'b0b17893a51343979e2090deee730538430cff2a88498e3885eb0ba179c58b6b' || hashedInput === 'ba605542cf569294fa14a3942c52231be9d3c3cf6267351a86ed58232b99a081') {
      this.wrongAnswerText = "Technically yes, but not the answer I'm looking for"
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
