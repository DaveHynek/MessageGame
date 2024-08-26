import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LetterBlockComponent } from '../letter-block/letter-block.component';

@Component({
  selector: 'app-letter-grid',
  standalone: true,
  imports: [ NgFor, LetterBlockComponent ],
  templateUrl: './letter-grid.component.html',
  styleUrl: './letter-grid.component.css'
})
export class LetterGridComponent {
  private greenLetters = ['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T'];
  private redLetters = ['J', 'K', 'Q', 'V', 'X', 'Z'];
  private blackLetters = ['B', 'C', 'D', 'F', 'G', 'H', 'M', 'P', 'U', 'W', 'Y'];
  protected alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor() {
  }
}
