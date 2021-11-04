import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  link = '';
  User!: User[];

  constructor(private http: HttpClient) { }

  addUser(user: any): any{
    return this.http.post<any[]>('http://127.0.0.1:8000/register', user);
  }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>('http://127.0.0.1:8000/api/user/all');
  }

  getOne(): any{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.get<any>('http://127.0.0.1:8000/api/user/show', {headers});
  }

  getEdit(id: number, user: any): any{
    const headers = {Authorization: 'Bearer ' + sessionStorage.getItem('token')};
    return this.http.patch<any>('http://127.0.0.1:8000/user/edit/' + id, user, {headers});
  }

  deleteUser(id: number){
    return this.http.delete('http://127.0.0.1:8000/user/delete/' + id);
  }

}
