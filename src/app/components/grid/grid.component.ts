import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { GridParent } from '../interfaces/grid-parent';
import { GridChild } from '../interfaces/grid-child';
import { ChildService } from 'src/app/services/child-service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends GridParent implements OnInit, AfterViewInit {

  @ViewChildren('gridChild') gridChildren: GridChild [];
  constructor(childService: ChildService) {
    super(childService);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    while (1) {
      if ( this.gridChildren) {
        this.registerChildren(this.gridChildren);
        break;
      }
    }
  }

}
