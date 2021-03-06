import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import expensesReducer from './expensesReducer';
import loginReducer from './loginReducer';
import reportsReducer from './reportsReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  login: loginReducer,
  form: reduxForm,
  expenses: expensesReducer,
  reports: reportsReducer,
  messages: messagesReducer
});
