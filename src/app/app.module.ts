import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ChildComponent } from './components/child/child.component';
import { ChildService } from './services/child-service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
