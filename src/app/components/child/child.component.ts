import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { GridChild } from '../interfaces/grid-child';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends GridChild implements OnInit, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

}
