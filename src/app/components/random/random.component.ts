import { Component, OnInit, ChangeDetectorRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, AfterViewInit {

  @Input() public placeholder: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

}
