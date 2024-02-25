import { Component } from '@angular/core';
import { Pokemon, PokemonsService } from '../../providers/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  public pokemons: Array<Pokemon>;

  constructor(readonly pokemonsService: PokemonsService) {
    this.pokemons = pokemonsService.pokemons;
  }
}
