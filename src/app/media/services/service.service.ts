import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
    constructor(private http: HttpClient) { }

    getAlbums(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/albums');
    }
 
    getPhotos() {
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
}
