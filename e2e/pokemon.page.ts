import { Page } from "@playwright/test";
import { PageObject } from "./page.object";

export class PokemonPage {

    public pokemonForm = new PokemonForm(this.page.locator('app-pokemon-form'));

    constructor(private page: Page) {}
    
    async navigateTo() {
        await this.page.goto('/pokemon');
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }
}

class PokemonForm extends PageObject {

    name = this.host.locator('#pokemonNameInput');
    type = this.host.locator('#pokemonTypeInput');
    attack = this.host.locator('#pokemonAttackInput');
    #submit = this.host.locator('button').nth(0);

    async fill(name: string, type: string, attack: string) {
        await this.name.fill(name);
        await this.type.fill(type);
        await this.attack.fill(attack);
    }

    async isEnabled() {
        return await this.#submit.isEnabled();
    }
}