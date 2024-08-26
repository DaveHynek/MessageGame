import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WeatherForecasts } from '../types/weatherForecast';
import { LetterGridComponent } from '../app/components/letter-grid/letter-grid.component';

@Injectable()
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LetterGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
  forecasts: WeatherForecasts = [];

  constructor(private http: HttpClient) {
    http.get<WeatherForecasts>('api/weatherforecast').subscribe({
      next: result => this.forecasts = result,
      error: console.error
    });
  }
}
