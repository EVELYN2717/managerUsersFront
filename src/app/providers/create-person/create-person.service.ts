import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreatePerson } from 'src/app/models/create-person/create-person';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreatePersonService {

  constructor(private readonly http: HttpClient) { }

  public postCreatePerson(item: CreatePerson) : Observable<any>{
    return this.http.post(`${environment.userEndpoint}`, item);
  }
}