import { ElementRef } from '@angular/core';

export abstract class GridChild {
    constructor(public elementRef: ElementRef) {
    }
    public index: number;
    public innerControl: boolean;
    public selected: boolean;
    public returnControl() {
    }
}
