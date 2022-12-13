import { TypeServiceService } from './../type-service.service';
import { Type } from './../type';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent {
	
	type: Type;
	
	constructor(private route: ActivatedRoute, private router:Router, private typeService: TypeServiceService) {
		this.type = new Type();
	}
	
	onSubmit(){
		this.typeService.save(this.type).subscribe(result => this.gotoTypeList());
	}
	
	gotoTypeList(){
		this.router.navigate(['/typelist']);
	}
}
