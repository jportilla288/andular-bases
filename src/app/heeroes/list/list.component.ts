import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroNames: string[] = ['spiderman','iroman','hulk','thor', 'lintena verde'];
  public deleteHeroe?: string ;

  removeLastheroe():void{
    this.deleteHeroe = this.heroNames.pop();

  }
}
