import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-apollo',
  standalone: true,
  imports: [],
  templateUrl: './apollo.component.html',
  styleUrl: './apollo.component.css'
})
export class ApolloComponent {
  correctAnswer: string = 'e55a24623f64ab39729cdbe3ef655fcbdf7ed1abedd44d853864a66c818444fd';
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
    } else if (hashedInput === '7baa68f2418ba82d2545a780c00d7a8778249bbcdaf7369114534874ea6d3bd6') {
      this.wrongAnswerText = 'lol no but that would be funny'
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
