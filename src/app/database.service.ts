import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';
import { Observable } from 'rxjs';

const url = `http://localhost:3000/results`;


@Injectable({
  providedIn: 'root'
})


export class DatabaseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]>{
    return this.http.get<Character[]>(url);
  }

}
