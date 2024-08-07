import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon list';
  pokemonList: Pokemon[] = [
    { name: 'charmander', type: 'fire', attack: 'ember', level: 5 },
    { name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
    { name: 'squirtle', type: 'water', attack: 'water gun', level: 5 }
  ]

  getPokemonImage(pokemon: Pokemon): string {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`;
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
