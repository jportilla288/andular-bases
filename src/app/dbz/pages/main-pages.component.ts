import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main.pages.component.html',
})

export class NamePageComponent  {
  //llamamos a DbzService esto es una inyeccion de dependencias
  constructor( private dbzService : DbzService ){}

  get characters() : Character[] {
    return [...this.dbzService.character];
  }

  onDeleteCharacter( id: string ) :void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character ) :void {
    this.dbzService.addCharacter(character);
  }
}
