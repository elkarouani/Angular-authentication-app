import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// interface myData {
//   obj: Object
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get('http://localhost:1235/file.php')
  }
}
