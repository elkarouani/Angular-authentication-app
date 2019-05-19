import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get('http://localhost:1234/file.php').subscribe(data => console.log(data))
  }
}
