import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from './type';
import { Observable } from 'rxjs';

@Injectable()
export class TypeServiceService {
	 private typesUrl: string;
	 
  	constructor(private http: HttpClient) {
		this.typesUrl = 'http://localhost:8080/types';
	}
	
	public findAll(): Observable<Type[]> {
		return this.http.get<Type[]>(this.typesUrl);
	}
	
	public save(type:Type) {
		return this.http.post<Type>(this.typesUrl, type, {responseType: 'text' as 'json'});
	}
	
	public deleteType(id:any) {
		return this.http.delete<Type>(`${this.typesUrl}/${id}`)
	}
}
