import { TypeServiceService } from './../type-service.service';
import { Type } from './../type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent {
	types?: Type[];
	
	constructor(private typeService: TypeServiceService) { }

	ngOnInit() {
		this.typeService.findAll().subscribe(data => {
			this.types = data;
		})
	}
}
