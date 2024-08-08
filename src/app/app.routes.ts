import { Routes } from '@angular/router';
import { PokemonTeamComponent } from './components/pokemon-team/pokemon-team.component';
import { PokemonStoreComponent } from './components/pokemon-store/pokemon-store.component';
import { PokemonTrainingComponent } from './components/pokemon-training/pokemon-training.component';
import { pokemonResolver } from './resolvers/pokemon.resolver';
import { moneyGuard } from './guards/money.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
    { path: 'pokemon', component: PokemonTeamComponent },
    { path: 'pokemon/:name', component: PokemonTrainingComponent, resolve: { pokemon: pokemonResolver } },
    { path: 'store', component: PokemonStoreComponent, canActivate: [moneyGuard] }
];
