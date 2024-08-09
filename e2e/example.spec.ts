import { test, expect } from '@playwright/test';
import { PokemonPage } from './pokemon.page';

test.describe('Pokemon Page', () => {

  let sut:PokemonPage;

  test.beforeEach(async ({ page }) => {
    sut = new PokemonPage(page);
    await sut.navigateTo();
  })

  test('has title', async () => {  
    // Expect a title "to contain" a substring.
    expect(await sut.getTitle()).toBe('PokemonList4');
  });
  
  test('form should be valid', async () => {
  
    // act
    await sut.pokemonForm.fill('mudkip', 'water', 'water gun');
  
    // assert
    await expect(sut.pokemonForm.name).toHaveValue('mudkip');
    await expect(sut.pokemonForm.type).toHaveValue('water');
    await expect(sut.pokemonForm.attack).toHaveValue('water gun');
  
    expect(await sut.pokemonForm.isEnabled()).toBe(true);
  })
  
  test('form should not be valid', async () => {
    // assert
    expect(await sut.pokemonForm.isEnabled()).toBeFalsy();
  })

});