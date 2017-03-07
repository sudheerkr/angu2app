import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http : Http) { }

  getAuthToken () {
    return this.http.post('/api/auth', {}).map(res => res.json());
  }

  getAllPosts() {
    return this.http.get('/api/posts').map(res => res.json());
  }

  getAllTwtrs () {
    return this.http.post('/api/twitrs', {}).map(res => res.json());
  }
}
