import { UserServiceService }from './../user-service.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	
	users?: User[];
	
	constructor(private userService: UserServiceService) { }
	
	ngOnInit(){
		this.userService.findAll().subscribe(data => {
			this.users = data;
		})	
	}

}
