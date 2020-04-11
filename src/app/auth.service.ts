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
    this.http.get('/api/file.php').subscribe(data => console.log(data))
  }
}
