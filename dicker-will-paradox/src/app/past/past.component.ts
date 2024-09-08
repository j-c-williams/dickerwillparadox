import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-past',
  standalone: true,
  imports: [],
  templateUrl: './past.component.html',
  styleUrl: './past.component.css'
})
export class PastComponent {
  correctAnswer: string = '3690a06bfc37a1ae3b022524592e2bf058dc6cbe5585a921c06c34117d506909';
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
    
    if (hashedInput === this.correctAnswer || hashedInput === 'f4ee1dc0ea1583767ed9cf4c23a36be5ea48507931b2b3ee98037cf99a7baf67' || hashedInput === 'a50e1b0f3facf81ffa2f0aa59af2896909c02cf1b840e1988be4fa01fa61878e') {
      this.router.navigate(['../']);
    } else if (hashedInput === 'e67d5e47d4f800e87206446c0a867dab29f122a2b29a3d659d970e789570bcee' || hashedInput === '5ead675e108b6c010646683b9fb758265d34678e6faec2d2a804ddc7ac855a8c') {
      this.wrongAnswerText = "Almost, but you're missing something"
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
