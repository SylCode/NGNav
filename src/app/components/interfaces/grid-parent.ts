import { GridChild } from './grid-child';
import { HostListener, ElementRef } from '@angular/core';
import { KEY_CODE } from '../enums/KEY_CODE';
import { ChildService } from 'src/app/services/child-service';

export abstract class GridParent {

    @HostListener('keyDown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.keyCode === KEY_CODE.ARROW_LEFT || event.keyCode === KEY_CODE.ARROW_RIGHT) {

        }
    }

    constructor(public childService: ChildService) {
    }

    public registerChildren(children: GridChild[]) {
        this.childService.registerChildren(children);
    }

    public grantControl(ref: string) {

    }
}
