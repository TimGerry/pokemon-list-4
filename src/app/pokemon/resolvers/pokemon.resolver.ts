import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

export const pokemonResolver: ResolveFn<Pokemon> = (route, _) => {
  return inject(PokemonService).get(route.params['name']);
};
