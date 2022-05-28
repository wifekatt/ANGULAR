import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../class/api-response/api.response.admin';
import { Admin } from '../class/admin';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/admins/';

  getAdmins() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getAdminById(adminId: number): Observable<any> {
    return this.http.get(this.baseUrl + adminId);
  }

  createAdmin(admin: Admin): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, admin);
  }

  updateAdmin(adminId: number, admin: Admin): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + admin.adminID, admin);
  }

  deleteAdmin(adminId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + adminId);
  }

}
