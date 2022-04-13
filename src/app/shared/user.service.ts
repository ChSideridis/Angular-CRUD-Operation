import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>("https://jsonplaceholder.cypress.io/users")
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
