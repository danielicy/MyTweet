import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tweet } from '../../_models';
  
@Injectable({ providedIn: 'root' })
export class TweetsService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Tweet[]>(`${config.apiUrl}/tweets`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/tweets/${id}`);
    }

    tweet(tweet: Tweet) {
        return this.http.post(`${config.apiUrl}/tweets/tweet`, tweet);
    }

    update(tweet: Tweet) {
        return this.http.put(`${config.apiUrl}/tweets/${tweet.id}`, tweet);
    }

    
}