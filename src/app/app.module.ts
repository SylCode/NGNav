import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ChildComponent } from './components/child/child.component';
import { NavService } from './services/nav-service';
import { GridChildDirective } from './directives/grid-child.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ChildComponent,
    GridChildDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
