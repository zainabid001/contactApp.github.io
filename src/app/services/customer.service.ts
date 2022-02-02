import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { retry , catchError} from 'rxjs/operators';
import {ICustomer} from '../model/ICustomer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public loadCustomers():Observable<ICustomer[]>{
    let dataUrl:string= `https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json`;
   return this.httpClient.get <ICustomer[]>(dataUrl).pipe(
      retry(1),
      catchError(this.handleError)
    )
   }

    // error
    public handleError(error: HttpErrorResponse) {
      let errorMessage: string = '';
      if (error.error instanceof ErrorEvent) {
        // client Error
        errorMessage = `Error : ${error.error.message}`
      }
      else {
        // server error
        errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
      }
      return throwError(errorMessage);
    }
  
}
