import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
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
