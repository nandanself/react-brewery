import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { searchBeer } from '../actions/homeAction';
import { BeerList } from "../components/beer-list";
import {NavBar} from "../components/navbar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsValue:[{'value':"name=",'label':'name'},{'value':"styleId=",'label':'style'}],
      searchType:"name=",
      searchValue:null,
      page:props.currentPage,
      beers:[],
    };
    this.changeSearhType = this.changeSearhType.bind(this);
    this.search = this.search.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  };

  componentWillReceiveProps(nextProps){
    if(this.props.beers !== nextProps.beers){
      this.setState({
        'beers':[...this.state.beers, ...nextProps.beers]  
      });
    }
  }
  
  changeSearhType(searchType){
    this.setState({
      'searchType':searchType,
    });
  };

  search(value){
    this.setState({
      'beers':[],
      'searchValue':value,
    });
    if (value) {
        let query = `${this.state.searchType}${value}`;
        let page = 1;
        this.props.searchBeer(query,page);
    }
  };

  loadMoreData(){
    let value = this.state.searchValue;
    let searchType = this.state.searchType;  
    let query = `${searchType}${value}`;
    let page =this.props.currentPage;
    this.props.searchBeer(query,page);
  };

  render() {
    let showLoadMoreButton = () => {
      if (this.props.beers.length > 49){
          return (
              <button className="loadMore" onClick={ this.loadMoreData }>Load More</button>
          )
      }
    };
    let { isLoading } = this.props;
    let { beers } = this.state;
    return (
      <div className="search-page">
        <NavBar options={this.state } changeSearhType={this.changeSearhType} searchBeer={this.search}/>
        <BeerList beers={beers} isLoading={isLoading}/>
        {showLoadMoreButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beers: state.HomeReducer.beers,
    isLoading: state.HomeReducer.isLoading,
    currentPage:state.HomeReducer.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      searchBeer: (name,page) => searchBeer(name,page),
    },
    dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);