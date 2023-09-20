import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },{
    id: uuid(),
    name: 'vegeta',
    power: 7500,
  }]

  // me ubico sobre el error con ctrl+. puedo implementar las dependencies faltantes
  addCharacter(character:Character):void{
    console.log('caracter que recibo-->',character);
    const newCharacter:  Character = {
       id: uuid(),
       //toma todas las propiedades de character y las  esparce en el nuevo objeto que se está creando ---> ...character
       ...character
    }
    this.character.push(newCharacter);

  }

  deleteCharacterById(id:string){
    console.log('lllego el id--->',id);
    //this.character.splice(index,1);
    this.character = this.character.filter(character => character.id !== id);

  }
}
