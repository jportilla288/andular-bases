import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  //para enviar informacion al hijo
  @Input()
  public characterList: Character[] = [{
    name: ' Thrunks',
    power:10
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string){
    //TODO: Emitir id del personaje
    console.log('personaje----->'+id);
    if ( !id ) return
    this.onDeleteId.emit(id);

  }
}
