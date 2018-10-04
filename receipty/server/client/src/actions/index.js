//Zulmy- I used the template we used for FeedbackLoop//
import axios from 'axios';
import { FETCH_USER, FETCH_EXPENSES, FETCH_REPORTS } from './types';

// const BASE_URL = "https://ps-receipty.herokuapp.com";
const BASE_URL = "localhost:5000";

export const fetchUser = (loginObject) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/api/login`, loginObject);
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };
 
  //until login is complete, hard code a user Id for a user that exists in your db here to see the add expense form work. 
<<<<<<< HEAD
  export const submitExpense = (userID, values, history) => async dispatch => {
    const res = await axios.post(`${BASE_URL}/api/expenses/5bb26ea977074900150d3ee7`, values);
=======
  export const submitExpense = (values, history) => async dispatch => {
    const res = await axios.post(`${BASE_URL}/api/expenses`, values);
  
>>>>>>> b1da6e974ddf64e80b168dedc00ab3ba7b21ec9a
    history.push('/expenses');
    dispatch({ type: FETCH_USER, payload: res.data });
    
  };

  export const submitReports = (values, history) => async dispatch => {
    const res = await axios.post(`${BASE_URL}/api/reports`, values);
  
    history.push('/reports');
    dispatch({ type: FETCH_USER, payload: res.data });
  };
  
  export const fetchExpenses = () => async dispatch => {
    const res = await axios.get(`${BASE_URL}/api/user/expenses`);
  
    dispatch({ type: FETCH_EXPENSES, payload: res.data });
  };

  export const fetchReports = () => async dispatch => {
    const res = await axios.get(`${BASE_URL}/api/reports`);
  
    dispatch({ type: FETCH_REPORTS, payload: res.data });
  };

  //the following code are actions or requests to the reducers to incorporate these calls for data as part of the store//
