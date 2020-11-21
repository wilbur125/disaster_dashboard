import React, { Component } from 'react';
import ReadyKit from '../readykit';
import Gold from '../metals/gold.js';
import Silver from '../metals/silver.js';
import Meteroids from '../meteroids/meteroids.js';
import Disasters from '../../components/disasters';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: JSON.parse(localStorage.getItem('okta-token-storage')).idToken.claims.name
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.state.currentUserName} !</h1>
        <br></br>
        <div id='app'></div>
          <div className="card" id = 'disaster'>
            <h2>10 current and most recent disasters</h2>
              <Disasters></Disasters>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'stock'>
            <h2>Gold Spot Price Oz</h2>
          <Gold/>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'silver'>
          <h2>Silver Spot Price Oz</h2>
          <Silver/>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'nasa'>
     <Meteroids/>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'covid'>
            <h2>Covid Data Goes Here</h2>
              <p>MW Data</p>
          </div>
          <br></br>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'ReadyKit'>
            <h2>{this.state.currentUserName}'s Ready Kit</h2>
            <ReadyKit username={this.state.currentUserName}></ReadyKit>
          </div>

      </div>

    );
  }
}

export default Dashboard;
