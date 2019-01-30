import { NavService } from '../../services/nav-service';
import { GridChildDirective } from '../../directives/grid-child.directive';

export abstract class GridParent {

    constructor(public navService: NavService) {
    }

    public registerChildren(children: GridChildDirective[]) {
        this.navService.registerChildren(children);
    }

    public grantControl(ref: string) {
    }
}
