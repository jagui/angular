import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  public generations: Array<string>;

  constructor() {
    this.generations = new Array<string>();
    for (let i = 1; i < 8; i++)
      this.generations.push(`Generation ${i}`);
  }

}
