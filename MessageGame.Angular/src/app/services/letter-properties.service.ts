import { Injectable } from '@angular/core';
import { LetterType } from '../classes/letter-type';

@Injectable({
  providedIn: 'root'
})
export class LetterPropertiesService {
  private greenLetters = ['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T'];
  private redLetters = ['J', 'K', 'Q', 'V', 'X', 'Z'];
  private blackLetters = ['B', 'C', 'D', 'F', 'G', 'H', 'M', 'P', 'U', 'W', 'Y'];

  public getLetterColor(letter: string): LetterType | null {
    if (letter.length != 1) {
      console.warn('Invalid parameter: "' + letter + '" is not a single character.');
      return null;
    }

    letter = letter.toUpperCase();

    if (this.greenLetters.includes(letter)) {
      return LetterType.Green;
    } else if (this.redLetters.includes(letter)) {
      return LetterType.Red;
    } else if (this.blackLetters.includes(letter)) {
      return LetterType.Black;
    }

    console.warn('Invalid parameter: "' + letter + '" was not found in the color lists.');
    return null;
  }
}
