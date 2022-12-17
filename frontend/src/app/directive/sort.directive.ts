import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../util/sort';
import { User } from '../../app/user';
import { Type } from '../../app/type';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

	@Input() appSort: User[] | Type[];
  	constructor(private rendered:Renderer2, private targetElem: ElementRef) {
		this.appSort = []
	}

	@HostListener("click")
	sortData(){
		const sort = new Sort();
		const elem = this.targetElem.nativeElement;
		const order = elem.getAttribute("data-order");
		const type = elem.getAttribute("data-type");
		const property = elem.getAttribute("data-name");
		if(order === "desc") {
			this.appSort.sort(sort.startSort(property, order, type));
			elem.setAttribute("data-order", "asc");
		} else {
			this.appSort.sort(sort.startSort(property, order, type));
			elem.setAttribute("data-order", "desc");
		}
	}
}
