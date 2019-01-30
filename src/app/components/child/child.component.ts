import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @Input() public placeholder: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

}
