import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  getProject() {
    return this.http.get<any>("https://jsonplaceholder.cypress.io/todos")
      .subscribe((res: any) => {
        return res;
      })
  }
}
