import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  baseUrl = 'https://localhost:44369/api/';



  constructor(private http: HttpClient) { }

  getOrdersForUser() {
    return this.http.get(this.baseUrl + 'orders');
  }

  getOrderDetailed(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id)
  }
}
