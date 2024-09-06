import { Component, Input, OnInit } from '@angular/core';
import { LetterPropertiesService } from '../../services/letter-properties.service';
import { LetterType } from '../../classes/letter-type';

@Component({
  selector: 'app-letter-block',
  standalone: true,
  imports: [],
  templateUrl: './letter-block.component.html',
  styleUrl: './letter-block.component.css'
})
export class LetterBlockComponent implements OnInit {
  @Input() letter = '';

  protected color = 'red';

  private letterPropService: LetterPropertiesService;
  constructor(letterPropSvc: LetterPropertiesService) {
    this.letterPropService = letterPropSvc;
  }

  ngOnInit() {
    var letterType = this.letterPropService.getLetterColor(this.letter);

    switch (letterType) {
      case LetterType.Green:
        this.color = 'Green';
        break;
      case LetterType.Red:
        this.color = 'Red';
        break;
      case LetterType.Black:
        this.color = 'Gray';
        break;
    }
  }
}
