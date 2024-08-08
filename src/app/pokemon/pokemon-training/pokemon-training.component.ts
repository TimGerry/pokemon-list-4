import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-training',
  templateUrl: './pokemon-training.component.html',
  styleUrl: './pokemon-training.component.scss'
})
export class PokemonTrainingComponent implements OnInit, OnDestroy {
  pokemon: Pokemon | undefined;
  #song = new Audio('assets/pokemon-song.mp3');

  constructor(private route: ActivatedRoute, private router: Router) {
    route.data.subscribe(data => this.pokemon = data['pokemon']);
  }

  ngOnInit(): void {
    this.#song.play();
  }

  ngOnDestroy(): void {
    this.#song.pause();
  }

  quitTraining() {
    this.router.navigate(['/pokemon']);
  }

  // resolving method 2
  // @Input() set name(name: string) {
  //   this.pokemonService.get(name).subscribe(data => this.pokemon = data);
  // }

  // constructor(private pokemonService: PokemonService) {}

  // resolving method 1
  // constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
  //   route.params.pipe(
  //     map(params => params['name']),
  //     switchMap(name => pokemonService.get(name))
  //   ).subscribe(data => this.pokemon = data);
  // }

  getPokemonImage(pokemon: Pokemon): string {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`;
  }
}
