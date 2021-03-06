//this file will form the actual expenses page
//required node modules files for functionality
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//component imports
import ExpenseListTable from './ExpenseListTable';
import NavBar from '../navbar/NavBar.js';
import { Button } from "react-bootstrap";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.navigateToNewExpense = this.navigateToNewExpense.bind(this);
  }

  navigateToNewExpense() {
    this.props.history.push('/expenses/new');
  }

  render() {
    return (
      <div>
        <NavBar />
        <ExpenseListTable />
          {/* <ExpenseList /> */}
          <Button 
            className="fixed-action-btn"
            bsStyle="success" 
            bsSize="large" 
            type="submit"
            onClick={this.navigateToNewExpense} >New Expense
          </Button>
          <Button
            className="fixed-action-btn"
            id="add-to-report"
            bsSize="large"
            type="submit">Add to Report
          </Button>
      </div>
    );
  }
};

export default withRouter(Expenses);
