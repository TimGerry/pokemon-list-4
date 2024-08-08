import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { PokemonTeamComponent } from './pokemon-team.component';
import { PokemonService } from '../../services/pokemon.service';
import { of } from 'rxjs';

describe('PokemonTeamComponent', () => {
  let component: PokemonTeamComponent;
  let fixture: ComponentFixture<PokemonTeamComponent>;
  let nativeEl: HTMLElement;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj(PokemonService, ['getAll']);

    await TestBed.configureTestingModule({
      imports: [PokemonTeamComponent],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonTeamComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display pokémon', async () => {
    // arrange
    const testData = [
      { name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
      { name: 'squirtle', type: 'water', attack: 'water gun', level: 5 }
    ];
    pokemonServiceSpy.getAll.and.returnValue(of(testData));

    // act
    fixture.detectChanges();
    await fixture.whenStable();

    // assert
    const actualPokemonRows = nativeEl.querySelectorAll('app-pokemon-list tbody > tr');
    expect(actualPokemonRows.length).toBe(2);
    expect(actualPokemonRows[0].innerHTML).toContain('bulbasaur');
  });

  // fdescribe('Async test playground', () => {
  // FAILS IN AFTER ALL
  // it('should run async 1', () => {
  //   const p = new Promise(res => {
  //     setTimeout(() => res(42));
  //   });
  //   p.then(num => expect(num).toBe(0));
  // });

  // FAILS NORMALLY
  // it('should run async', async () => {
  //   const p = new Promise(res => setTimeout(() => res(42)));
  //   const num = await p;
  //   expect(num).toBe(0);
  // });

  // it('should run async with waitForAsync', waitForAsync(() => {
  //   //                                         👆
  //   const p = new Promise(res => setTimeout(() => res(42)));
  //   p.then(num => expect(num).toBe(0));
  // }));

  // it('should run async with fakeAsync', fakeAsync(() => {
  //   //                                    👆
  //   let val = 0;
  //   setTimeout(() => (val = 42), 10000);
  //   setTimeout(() => (val = 0), 20000);
  //   tick(10000);
  //   expect(val).toBe(42);
  //   tick(10000);
  //   expect(val).toBe(0);
  // }));
  // });
});
