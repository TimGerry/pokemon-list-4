import { Routes } from '@angular/router';
import { PokemonTeamComponent } from './pokemon/pokemon-team/pokemon-team.component';
import { PokemonStoreComponent } from './pokemon/pokemon-store/pokemon-store.component';
import { PokemonTrainingComponent } from './pokemon/pokemon-training/pokemon-training.component';
import { pokemonResolver } from './pokemon/resolvers/pokemon.resolver';
import { moneyGuard } from './guards/money.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
    { path: 'pokemon', component: PokemonTeamComponent },
    { path: 'pokemon/:name', component: PokemonTrainingComponent, resolve: { pokemon: pokemonResolver } },
    { path: 'store', component: PokemonStoreComponent, canActivate: [moneyGuard] }
];
