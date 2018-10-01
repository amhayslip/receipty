// this section imports all the required elements from other files

import React, { Component } from "react";
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'
import './navbar.css';

class NavBar extends Component {
 constructor(props) {
   super(props);
  }
   render() {
    return (
     <div id = "exp-rep-navbar">

      <div> 
        <img src="http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png" alt="Avatar"  id = "navbar-avatar" />
      </div>
      
      

      <ul className = "navbar-ul ">
         {/* links to all major routes. do note that we agreed that for mvp Reports, Inbox, and Logout are all duds. I put settings so that it looks nice.no need to make it do anything, just don't click it.  */}
        <li>
          <Link to = {`/expenses`}>
            <a id = "expenses" className="navbar-li-a">
                Expenses  
            </a>
          </Link>
        </li>
        <li>
          <Link to = {`/reports`}>
            <a id = "reports" className = "navbar-li-a">
              Reports
            </a>
          </Link>
        </li>
        <li>
          <Link to = {`/inbox`}>
            <a id = "inbox" className = "navbar-li-a">
              Inbox 
            </a>
          </Link>
        </li>
        <li>
          <Link to = {`/settings`}> 
            <a id = "settings" className = "navbar-li-a">
              Settings
            </a>
          </Link>
        </li>
        <li>
          <Link to = {`/logout`}>
            <a id = "logout" className = "navbar-li-a">
              Logout
            </a>
          </Link>
        </li>
        <li>
          <Link to = {`/about`}>
            <a id = "about-recipty" className = "navbar-li-a">
              Recipty
            </a>
          </Link>
        </li>
        
      </ul>
      {function activePageHighlighter(){
        //this function will allow for the active page to be highlighted in green. currently css is set, not active still working on the javascript. Time boxed myself will come back to it after mvp/mvp+
      }}


     </div>

     );
    }
  }


export default NavBar;