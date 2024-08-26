import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter-block',
  standalone: true,
  imports: [],
  templateUrl: './letter-block.component.html',
  styleUrl: './letter-block.component.css'
})
export class LetterBlockComponent {
  @Input() letter = '';
  @Input() color = '';
}
