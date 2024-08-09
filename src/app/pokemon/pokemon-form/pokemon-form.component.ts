import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Pokemon, pokemonTypes } from '../models/pokemon.model';
import { catchError, delay, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent implements OnInit {
  @Output() add = new EventEmitter<Pokemon>();

  pokemonForm: FormGroup<PokemonForm>;

  constructor(private nnfb: NonNullableFormBuilder) {
    this.pokemonForm = nnfb.group<PokemonForm>({
      // name: nnfb.control('mudkip', [Validators.required, Validators.minLength(3)], [pokemonValidator()]),
      name: nnfb.control('mudkip', [Validators.required, Validators.minLength(3)]),
      type: nnfb.control('', [Validators.required, typeValidator()]),
      type2: nnfb.control(undefined, [typeValidator()]),
      attack: nnfb.control('', Validators.required),
      level: nnfb.control(5, [Validators.required, Validators.min(1), Validators.max(100)]),
    }, {
      validators: [duplicateTypeValidator()]
    });
    // uncomment to see difference between value and raw value
    // this.pokemonForm.controls.name.disable();
  }

  ngOnInit(): void {
    this.pokemonForm.valueChanges.subscribe(console.log);
  }

  submit() {
    if (this.pokemonForm.valid) {
      this.add.emit({ ...this.pokemonForm.getRawValue() });
      this.pokemonForm.reset();
    } else {
      console.log('Not a valid form!');
    }
  }

  log() {
    console.log('form value', this.pokemonForm.value);
    console.log('form raw value', this.pokemonForm.getRawValue());
    console.log('form name value', this.pokemonForm.controls.name.value);
    console.log('form name raw value', this.pokemonForm.controls.name.getRawValue());
  }
}

type PokemonForm = {
  [P in keyof Pokemon]: FormControl<Pokemon[P]>
}

const typeValidator: () => ValidatorFn = () => {
  return (control: AbstractControl) => {
    const type = control.value;
    const valid = !type || pokemonTypes.includes(type);

    return valid ? null : { invalidType: `${type} is not a valid type!` }
  }
}

const duplicateTypeValidator: () => ValidatorFn = () => {
  return (group: AbstractControl) => {
    const type = group.get('type')?.value;
    const type2 = group.get('type2')?.value;
    const valid = !type || !type2 || type !== type2;

    return valid ? null : { duplicateTypes: 'No duplicate types allowed!' }
  }
}

const pokemonValidator: () => AsyncValidatorFn = () => {
  return (control: AbstractControl) => {
    const name = control.value;

    if (!name) of(null);

    return ajax(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
      map(_ => null),
      catchError(_ => of({ invalidPokemon: `${name} is not a valid Pokémon name!` })),
      // delay(2000)
    )
  }
}
