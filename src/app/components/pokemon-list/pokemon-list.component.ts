import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionalPipe } from '../../pipes/optional.pipe';
import { Pokemon } from '../../models/pokemon.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [OptionalPipe, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonList!: Pokemon[];
  @Output() pokemonClicked = new EventEmitter<Pokemon>();

  getPokemonImage(pokemon: Pokemon): string {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`;
  }

  clickPokemon(pokemon: Pokemon) {
    this.pokemonClicked.emit(pokemon);
  }
}
