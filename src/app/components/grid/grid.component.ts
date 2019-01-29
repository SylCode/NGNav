import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { GridParent } from 'src/app/components/interfaces/grid-parent';
import { NavService } from 'src/app/services/nav-service';
import { GridChildDirective } from 'src/app/directives/grid-child.directive';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends GridParent implements OnInit, AfterViewInit {

  @ViewChildren(GridChildDirective) gridChildren: GridChildDirective[];
  constructor(navService: NavService) {
    super(navService);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    while (1) {
      if ( this.gridChildren) {
        this.gridChildren[1].navigateTo();
        this.registerChildren(this.gridChildren);
        break;
      }
    }
  }

}
