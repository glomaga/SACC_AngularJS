import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Router } from "@angular/router";
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PersonService {
	baseUrl: string = "https://mwa-person-api.herokuapp.com/";
	constructor(private http: Http, private authHttp: AuthHttp) { }

	getPersons(){
         return this.authHttp.get(this.baseUrl +"api/persons").map(res=> res.json());
	}
	
	getDoctors(){
		return this.authHttp.get(this.baseUrl +"api/persons/doctors").map(res=> res.json());
    }
    
    getOwners(){
	    return this.authHttp.get(this.baseUrl +"api/persons/owners").map(res=> res.json());
    }

}