import { HostListener } from '@angular/core';
import { NavService } from 'src/app/services/nav-service';
import { GridChildDirective } from 'src/app/directives/grid-child.directive';
import { KEY_CODE } from 'src/app/components/enums/KEY_CODE';

export abstract class GridParent {

    @HostListener('keyDown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.keyCode === KEY_CODE.ARROW_LEFT || event.keyCode === KEY_CODE.ARROW_RIGHT) {

        }
    }

    constructor(public navService: NavService) {
    }

    public registerChildren(children: GridChildDirective[]) {
        this.navService.registerChildren(children);
        this.navService.selectComponent(1);
    }

    public grantControl(ref: string) {
    }
}
