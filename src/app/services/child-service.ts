import { Injectable, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { GridChild } from '../components/interfaces/grid-child';

@Injectable()


export class ChildService {

    private children: GridChild[] = [];
    private childrenRefs: ElementRef [];
    private currentSelection = 0;

    public getCurrentActiveChild(): Observable<number> {
        return Observable.create(this.currentSelection);
    }

    public registerChild(child: GridChild) {
        this.children.push(child);
    }

    public registerChildren(children: GridChild[]) {
        this.children = children;
    }

    private focusOnComponent(index: number) {
        this.children[index].elementRef.nativeElement.focus();
    }
}
