import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../class/api-response/api.response.vote';
import { Vote } from '../class/vote';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/votes/';

  getVotes() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getVoteById(voteId: number): Observable<any> {
    return this.http.get(this.baseUrl + voteId);
  }

  createVote(vote: Vote): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, vote);
  }

  updateVote(voteId: number, vote: Vote): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + vote.voteID, vote);
  }

  deleteVote(voteId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + voteId);
  }

}

