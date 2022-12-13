import { TypeServiceService } from './../type-service.service';
import { Type } from './../type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent {
	types: Type[];
	
	constructor(private typeService: TypeServiceService) {
		this.types = [];
	}

	ngOnInit() {
		this.typeService.findAll().subscribe(data => {
			this.types = data;
		})
	}
	
	deleteType(id:any, index: number){
		this.typeService.deleteType(id).subscribe(response => {
			this.types.splice(index, 1);
		})
		this.typeService.findAll().subscribe(data => {
			this.types = data;
		})	
	}

}
