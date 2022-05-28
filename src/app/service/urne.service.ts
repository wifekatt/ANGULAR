import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../class/api-response/api.response.urne';
import { Urne } from '../class/urne';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrneService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/urnes/';

  getUrnes() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUrneById(urneId: number): Observable<any> {
    return this.http.get(this.baseUrl + urneId);
  }

  createUrne(urne: Urne): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, urne);
  }

  updateUrne(urneId: number, urne: Urne): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + urne.urneID, urne);
  }

  deleteUrne(urneId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + urneId);
  }

}

