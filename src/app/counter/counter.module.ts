import { NgModule } from "@angular/core";
import { counterComponent } from "./component/counter/counter.component";

@NgModule ({
  declarations:[
    counterComponent
  ],
  exports: [
    counterComponent
  ]
})
export class CounterModule {}
