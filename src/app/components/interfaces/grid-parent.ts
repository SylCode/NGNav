
import { NavService } from 'src/app/services/nav-service';
import { GridChildDirective } from 'src/app/directives/grid-child.directive';

export abstract class GridParent {

    constructor(public navService: NavService) {
    }

    public registerChildren(children: GridChildDirective[]) {
        this.navService.registerChildren(children);
    }

    public grantControl(ref: string) {
    }
}
