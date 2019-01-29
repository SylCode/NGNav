import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

}
