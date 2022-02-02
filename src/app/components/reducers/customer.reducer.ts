import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { ICustomer } from 'src/app/model/ICustomer';
import * as customerAction from '../actions/customer.actions'


export const customerFeatureKey = 'customer';

export interface State {
  loading:boolean,
  customers:ICustomer[],
  errorMessage:string

}

export const initialState: State = {
  loading:false,
  customers:[],
  errorMessage:''

};

export const reducer = createReducer(
  initialState,
  on(customerAction.loadCustomers, (state)=>{
    return{
      ...state,
      loading:true
    }
  }),
  on(customerAction.loadCustomersSuccess, (state , {customers})=>{
    return{
      ...state,
      loading:false,
      customers: customers
    }
  }),
  on(customerAction.loadCustomersFailure, (state, {error})=>{
    return{
      ...state,
      loading: false,
      errorMessage: error
    }
  })

);
