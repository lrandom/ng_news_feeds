import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

const BASE_API_URL = environment.baseApiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {

  }

  convertPayloadToUrlQuery(payload) {
    let data = Object.keys(payload).map(key => key + '=' + payload[key]).join('&'); // {q:a,b:c} => q=a&b=c
    return data;
  }

  getNews(payload) {
    return this.http.get(`${BASE_API_URL}everything?apiKey=${API_KEY}&` + this.convertPayloadToUrlQuery(payload));
  }
}
