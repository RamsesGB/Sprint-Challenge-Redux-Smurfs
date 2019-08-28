import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/index';

class SmurfForm extends Component {
    state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      } 
    };

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    console.log(e.target);
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    console.log(this.props)
    e.preventDefault();
    this.props.postSmurf(this.state.smurf)
    .then(() => this.props.history.push("/"))
}

  

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { postSmurf })(SmurfForm);
