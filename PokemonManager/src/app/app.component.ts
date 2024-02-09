import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GenerationsComponent } from './components/generations/generations.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GenerationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numberOfClicks: number = 0;
  constructor() { }

  ngOnInit() {

  }

  onClick() {
    this.numberOfClicks++;
    console.log(`number of clicks ${this.numberOfClicks}`);
  }
}
