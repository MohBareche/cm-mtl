import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class RentalService {

  constructor(private httpClient: HttpClient){

  }

  public getRentalById(rentalId: string): Observable<Rental> {
    return this.httpClient.get<Rental>(`api/v1/rentals/${rentalId}`)
  }


  public getRentals(): Observable<Rental[]> {
    return this.httpClient.get<Rental[]>(`api/v1/rentals`)
  }


}