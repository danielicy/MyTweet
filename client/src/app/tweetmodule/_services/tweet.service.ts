import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tweet } from '../../_models';
  
@Injectable({ providedIn: 'root' })
export class TweetsService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Tweet[]>(`${config.apiUrl}/tweets`);
    }

    //gets tweets user tweetd
    getById(id: number) {
        return this.http.get(`${config.apiUrl}/tweets/${id}`);
    }

    //gets tweets by users I follow
	 getFollowedTweets(id: number) {
        return this.http.get(`${config.apiUrl}/tweets/followed/${id}`);
    }	

    tweet(tweet: Tweet) {
        return this.http.post(`${config.apiUrl}/tweets/tweet`, tweet);
    }

    update(tweet: Tweet) {
        return this.http.put(`${config.apiUrl}/tweets/${tweet.id}`, tweet);
    }

    
}