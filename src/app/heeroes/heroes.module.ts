import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    // CommonModule se debe importar para usar el ngIf el ngForllamado de otro modulo
    CommonModule
  ]
})
export class HeroesModule{ }
