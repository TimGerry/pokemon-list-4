import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss',
})
export class PokemonTeamComponent implements OnInit {
  pokemon$!: Observable<Pokemon[] | undefined>;

  constructor(private pokemonService: PokemonService) {
    console.log('constructor!');
  }

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.pokemon$;
  }

  addPokemon(pokemonToAdd: Pokemon) {
    this.pokemonService.add(pokemonToAdd);
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
