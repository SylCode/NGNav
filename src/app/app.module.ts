import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ChildComponent } from './components/child/child.component';
import { NavService } from './services/nav-service';
import { GridChildDirective } from './directives/grid-child.directive';
import { RandomComponent } from './components/random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ChildComponent,
    GridChildDirective,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent],
  exports: [GridChildDirective]
})
export class AppModule { }
