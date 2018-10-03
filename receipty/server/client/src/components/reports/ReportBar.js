import React, {Component} from 'react';
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import { fetchReports } from '../actions'

class SearchBar extends Component {
    constructor() {
      super();
  
      this.state = {
        defaultOption: '',
        currentPage: 1
      }
    }
  
    updateState(key, value){
      //a little hacky...
      let property = {};//currentPage: 1};
      property[key] = value;
  
      this.setState(property, () => this.fetchData())
    }
  
    fetchData() {
      let filter = {};
  
      if(this.state.search)
        filter.name = this.state.search
      if(this.state.currentPage)
        filter.page = this.state.currentPage;
  
      this.props.fetchReports(filter);
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    pageClickHandler(i) {
      if(i !== this.state.currentPage)
        this.updateState('currentPage', i);
    }
  
    render() {
      let pages = [];
      for(let i = 1; i < this.props.pages + 1; i++) {
        pages.push(
          <span className={i === this.state.currentPage ? "page selectedPage" : "page"}
                onClick={() => this.pageClickHandler(i)}
                key={i}>
            {i}
          </span>);
      }
  
      return (
        <div>
          <div>
            <div className="search-bar-filter-container">
              search:
              <input onChange={event => this.updateState('search', event.target.value)} type="text"/>
            </div>
          </div>
          <div>
            {this.props.children}
          </div>
          <div>
            page:
            {
              pages
            }
          </div>
        </div>
        
      );
    }
  }
  
  function mapStateToProps(state) {
    console.log(state);
    let {currentPage, reportMetadata} = state;
    return {
      currentPage,
      pages:reportMetadata.pages
    };
  }
   function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchReports}, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);