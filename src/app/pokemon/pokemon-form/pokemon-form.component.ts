import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Pokemon, pokemonTypes } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent {
  @Output() add = new EventEmitter<Pokemon>();

  pokemonForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    type: new FormControl('', [Validators.required, typeValidator()]),
    type2: new FormControl(undefined, [typeValidator()]),
    attack: new FormControl('', Validators.required),
    level: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(100)]),
  }, {
    validators: [duplicateTypeValidator()]
  });

  submit() {
    if (this.pokemonForm.valid) {
      this.add.emit({ ...this.pokemonForm.value } as Pokemon);
      this.pokemonForm.reset();
    } else {
      console.log('Not a valid form!');
    }
  }

  log() {
    console.log(this.pokemonForm.value);
  }
}

const typeValidator = () => {
  return (control: AbstractControl) => {
    const type = control.value;
    const valid = !type || pokemonTypes.includes(type);

    return valid ? null : { invalidType: `${type} is not a valid type!` }
  }
}

const duplicateTypeValidator = () => {
  return (group: AbstractControl) => {
    const type = group.get('type')?.value;
    const type2 = group.get('type2')?.value;
    const valid = !type || !type2 || type !== type2;

    return valid ? null : { duplicateTypes: 'No duplicate types allowed!' }
  }
}
