import React, { Component } from "react";
import history from './History';
import Charts from './Charts';
import './Landing.css';

export default class Landing extends Component {
    render() {
      return (
        <div className="container">
            
            <h1 style={{marginTop: '300px', fontSize: '75px', width: '100%'}}>OkCupid User Profiles</h1>
            <form>
                <button type="submit" style={{color: 'rgba(12, 40, 75, 0.87)', marginTop: '150px', fontSize: '25px', backgroundColor: 'white', borderColor: 'white'}} 
                className="btn btn-primary btn-sm" 
                onClick={() => history.push('./Charts')}>View</button>
            </form>
        </div>
      
    );
  }
}
