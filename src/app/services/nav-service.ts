
import { KEY_CODE } from 'src/app/components/enums/KEY_CODE';
import { GridChildDirective } from 'src/app/directives/grid-child.directive';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationMap } from 'src/app/components/interfaces/navigation-map';

@Injectable()
export class NavService {

    private children: GridChildDirective[] = [];
    private currentSelection = 0;
    private navMap: NavigationMap[];
    private currentNavState: number;

    constructor() {
        window.addEventListener('keydown', (event) => {
            if (this.processKeyInput(event.keyCode)) {
                event.preventDefault();
            }
          });
          this.currentNavState = 0;
          this.navMap = [];
          this.navMap.push({'D': 8, 'R': 1, 'L': 12});
          this.navMap.push({'D': 8, 'R': 2, 'L': 0});
          this.navMap.push({'D': 9, 'R': 3, 'L': 1});
          this.navMap.push({'D': 10, 'R': 4, 'L': 2});
          this.navMap.push({'D': 10, 'R': 5, 'L': 3});
          this.navMap.push({'D': 11, 'R': 6, 'L': 4});
          this.navMap.push({'D': 12, 'R': 7, 'L': 5});
          this.navMap.push({'D': 12, 'R': 8, 'L': 6});
          this.navMap.push({'U': 0, 'R': 9, 'L': 7});
          this.navMap.push({'U': 2, 'R': 10, 'L': 8});
          this.navMap.push({'U': 3, 'R': 11, 'L': 9});
          this.navMap.push({'U': 5, 'R': 12, 'L': 10});
          this.navMap.push({'U': 7, 'R': 0, 'L': 11});
    }

    public getCurrentActiveChild(): Observable<number> {
        return Observable.create(this.currentSelection);
    }

    public registerChild(child: GridChildDirective) {
        this.children.push(child);
    }

    public registerChildren(children: GridChildDirective[]) {
        for (let index = 0; index < children.length; index++) {
            children[index].index = index;
        }
        this.children = children;
        this.selectComponent(0);
    }

    public focusOnComponent(index: number) {
        this.children[index].elementRef.nativeElement.focus();
    }

    public selectComponent(index: number) {
        if (index !== this.currentNavState) {
            this.children[this.currentNavState].leave();
        }
        this.children[index].navigateTo();
        this.currentNavState = index;
    }

    private performNavigation(direction: string) {
        this.selectComponent(this.navMap[this.currentNavState][direction]);
    }

    private processKeyInput(keyCode: number): boolean {
        switch (keyCode) {
            case KEY_CODE.ARROW_DOWN:
                this.performNavigation('D');
                break;
            case KEY_CODE.ARROW_UP:
                this.performNavigation('U');
                break;
            case KEY_CODE.ARROW_LEFT:
                this.performNavigation('L');
                break;
            case KEY_CODE.ARROW_RIGHT:
                this.performNavigation('R');
                break;
            case KEY_CODE.ESC:
                // this.performNavigation('Esc');
                break;
            default:
                return false;
        }
        return true;
    }
}
