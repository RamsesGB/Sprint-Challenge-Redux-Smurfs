import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SmurfForm from '../components/SmurfForm';
import Smurfs from '../components/Smurfs';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='Nav'>
            <NavLink exact to="/">Home</NavLink>
            <br></br>
            <NavLink exact to="/smurf-form">Add Smurf</NavLink>
          </div>
          <Route exact path="/" render={() => {
            return <Smurfs smurfsData={this.props.smurfsData} />
          }}
          />
          <Route
            path="/smurf-form"
            component={SmurfForm}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return{
    smurfsData: state.smurfs
  }
}

export default connect(mapStateToProps,{ fetchSmurfs })(App);

