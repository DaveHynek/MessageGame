import { Injectable } from '@angular/core';
import { LetterType } from '../classes/letter-type';
import { LetterPropertiesService } from './letter-properties.service';

@Injectable({
  providedIn: 'root'
})
export class CodeGeneratorService {
  private letterPropService: LetterPropertiesService;
  private currentCode: string[] | null;

  constructor(letterPropSvc: LetterPropertiesService) {
    this.letterPropService = letterPropSvc;
    this.currentCode = null;
  }

  public generateNewCode() {
    this.currentCode = [];

    var letterPattern = [LetterType.Green, LetterType.Red | LetterType.Black, LetterType.Red | LetterType.Black,
      LetterType.Green, LetterType.Red | LetterType.Black, LetterType.Green | LetterType.Red | LetterType.Black];
    var assignedRed = false;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    for (var i = 0; i < 6; i++) {
      var validLetter = false;
      while (!validLetter) {
        var randIndex = Math.floor(Math.random() * alphabet.length);
        var letterType = this.letterPropService.getLetterColor(alphabet[randIndex]);

        if (letterType != null && (letterType != LetterType.Red || !assignedRed) && letterType & letterPattern[i]) {
          validLetter = true;
          this.currentCode.push(alphabet[randIndex]);
          alphabet.splice(randIndex, 1);

          if (letterType == LetterType.Red) assignedRed = true;
        }
      }
    }
  }
}
