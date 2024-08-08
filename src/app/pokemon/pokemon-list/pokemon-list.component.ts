import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonList!: Pokemon[];
  @Output() pokemonClicked = new EventEmitter<Pokemon>();

  constructor(private router: Router) {}

  getPokemonImage(pokemon: Pokemon): string {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`;
  }

  train(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.name]);
  }

  clickPokemon(pokemon: Pokemon) {
    this.pokemonClicked.emit(pokemon);
  }
}
