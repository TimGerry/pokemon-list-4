import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { OptionalPipe } from './pipes/optional.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OptionalPipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon list';
  today = new Date();
  pokemonList: Pokemon[] = [
    { name: 'charmander', type: 'fire', attack: 'ember', level: 5 },
    { name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
    { name: 'squirtle', type: 'water', attack: 'water gun', level: 5 }
  ];

  getPokemonImage(pokemon: Pokemon): string {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`;
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
