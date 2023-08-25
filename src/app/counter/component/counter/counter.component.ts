import { Component} from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
  <h3>{{counter}}</h3>
  <button (click)="incrementVal(1)">+1</button>
  <button (click)="resetVal()">reset</button>
  <button (click)="decrementVal(1)">-1</button>
  <hr>
  <h4>{{counNumberclick}}</h4>
  `
})

export class counterComponent {
  public title: any = 'New Project p';
  public counter: number = 10;
  public counNumberclick:number = 0;
  incrementVal(val:number):void{
    this.counter += val;
    this.counNumberclick += val;
  }
  decrementVal(val:number):void{
    this.counter -= val;
    this.counNumberclick -= val;
  }
  resetVal():void{
    this.counter -= this.counNumberclick;
  }
}
