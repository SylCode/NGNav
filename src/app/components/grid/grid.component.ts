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
