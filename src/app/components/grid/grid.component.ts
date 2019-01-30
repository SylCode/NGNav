import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { GridParent } from '../interfaces/grid-parent';
import { GridChildDirective } from '../../directives/grid-child.directive';
import { NavService } from '../../services/nav-service';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends GridParent implements OnInit, AfterViewInit {

  public placeholders = [
    'Enter',
    'The',
    'Sandman',
    'by',
    'Metallica',
    'Ya',
    'gotta',
    'make',
    'do',
    'with',
    'what',
    'ya',
    'got'
  ];

  @ViewChildren(GridChildDirective) gridChildren;
  constructor(navService: NavService) {
    super(navService);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    while (1) {
      if ( this.gridChildren) {
        this.registerChildren(this.gridChildren.toArray());
        break;
      }
    }
  }

}
