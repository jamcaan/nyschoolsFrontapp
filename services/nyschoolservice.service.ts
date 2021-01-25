import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


import { Nyschool} from '../models/nyschools';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NyschoolserviceService {

 

  constructor(private http: HttpClient) { }

  listSchools(): Observable<Nyschool[]>{

    return this.http.get<Nyschool[]>(`${environment.baseUrl}` + "/list", {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }

  findSchoolById(id: number): Observable<Nyschool>{
    return this.http.get<Nyschool>(`${environment.baseUrl}/${id}`,{headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })});
  }
}
