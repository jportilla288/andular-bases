import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age:  number = 32;

  //son un apropiedad pero son un metodo
  get capitalizedName(): string {
     return  this.name.toUpperCase();
  }
  getHeroDescription(): string {
     return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
   this.name = 'Linterna Verde';
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
    /*document.querySelectorAll('h1')!. forEach(element=>{
      element.innerHTML = '<h1>Hola desde Angular</h1>';
    })*/
  }

  changeAge(): void {
   this.age = 20
  }
}
