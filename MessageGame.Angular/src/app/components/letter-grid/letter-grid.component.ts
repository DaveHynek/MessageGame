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
  protected alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor() {
  }
}
