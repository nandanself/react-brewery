import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { searchBeer } from '../actions/homeAction';
import { BeerList } from "../components/beer-list";
import {NavBar} from "../components/navbar";

class Home extends Component {


  
  render() {
    let { beers, searchBeer, isLoading } = this.props;
    return (
      <div className="search-page">
        <NavBar searchBeer={searchBeer}/>
        <BeerList beers={beers} isLoading={isLoading}/>       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    beers: state.HomeReducer.beers,
    isLoading: state.HomeReducer.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      searchBeer: (name) => searchBeer(name),
    },
    dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);