import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-chicken',
  standalone: true,
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.css'
})
export class ChickenComponent {
  correctAnswer: string = '8950abfda7b727630760dd35bcf5c3daa7631aff223a90f7728c0d2521dde10c';
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
