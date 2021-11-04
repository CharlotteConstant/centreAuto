import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Garage} from './model/garage.model';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
link = '';
Garage!: Garage[];
  constructor(private http: HttpClient) { }

  addGarage(garage: any): any{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    const username = sessionStorage.getItem('username');
    return this.http.post<any>('http://127.0.0.1:8000/garage/new/' + username, garage, {headers});
  }

  getOne(id: number): Observable<Garage>{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.get<Garage>('http://127.0.0.1:8000/garage/show/' + id , {headers});
  }

  editGarage(id: number, garage: any): Observable<Garage[]> {
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    const username = sessionStorage.getItem('username');
    return this.http.patch<Garage[]>('http://127.0.0.1:8000/garage/edit/' + id, garage, {headers});
  }

  getAllByUser(): Observable<Garage[]>{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.get<Garage[]>('http://127.0.0.1:8000/api/garage/allByUser', {headers});
  }


  delete(id: number): Observable<any>{
    //const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.delete('http://127.0.0.1:8000/garage/delete/' + id);
  }
}
