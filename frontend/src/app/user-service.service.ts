import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceService {

	private usersUrl: string;
	
  	constructor(private http:HttpClient) {
		this.usersUrl = 'http://localhost:8080/users';
	}
	
	public findAll(): Observable<User[]> {
		return this.http.get<User[]>(this.usersUrl);
	}
		
	public save(user: User) {
		return this.http.post<User>(this.usersUrl, user, {responseType: 'text' as 'json'});
	}
	
	public deleteUser(id:any) {
		return this.http.delete<User>(`${this.usersUrl}/${id}`)
	}
	
	public updateUser(user:User) {
		//user-form(user);
		//console.log(user);
	}
}
