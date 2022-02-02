import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ICustomer } from 'src/app/model/ICustomer';
import { State } from 'src/app/reducers';
import * as customerActions from '../actions/customer.actions';
import * as customerReducer from '../reducers/customer.reducer'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers:ICustomer[]=[];
  public errorMessage:string='';
  public loading: boolean=false;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    // // dispatch an action to load customers from server
    this.store.dispatch(customerActions.loadCustomers());

     // get customers data from NGRX Store
     this.store.pipe(select(customerReducer.customerFeatureKey)).subscribe((state)=>{
       this.customers= state.customers;
       this.errorMessage= state.errorMessage;
       this.loading= state.loading; 

     })
    
  }

}
