import { UserServiceService }from './../user-service.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	
	users: User[];
	
	constructor(private userService: UserServiceService) {
		this.users = [];
	}
	
	ngOnInit(){
		this.userService.findAll().subscribe(data => {
			this.users = data;
		})	
	}
	
	deleteUser(id:any, index: number){
		this.userService.deleteUser(id).subscribe(response => {
			this.users.splice(index, 1);
		})
		this.userService.findAll().subscribe(data => {
			this.users = data;
		})	
	}

}
