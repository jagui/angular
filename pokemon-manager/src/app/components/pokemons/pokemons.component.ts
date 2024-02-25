import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  public pokemons: Array<Pokemon>;

  constructor() {
    this.pokemons = [
      { id: 1, name: 'Bulbasaur', category: 'Seed', type: ['Grass', 'Poison'], height: 0.7, weight: 6.9 },
      { id: 2, name: 'Ivysaur', category: 'Seed', type: ['Grass', 'Poison'], height: 1.0, weight: 13.0 },
      { id: 3, name: 'Venusaur', category: 'Seed', type: ['Grass', 'Poison'], height: 2.0, weight: 100.0 },
      { id: 4, name: 'Charmander', category: 'Lizard', type: ['Fire'], height: 0.6, weight: 8.5 },
      { id: 5, name: 'Charmeleon', category: 'Flame', type: ['Fire'], height: 1.1, weight: 19.0 },
      { id: 6, name: 'Charizard', category: 'Flame', type: ['Fire', 'Flying'], height: 1.7, weight: 90.5 },
    ];
  }
}
