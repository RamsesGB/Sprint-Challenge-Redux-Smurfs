import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
    console.log(props);
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfsData.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                // id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
}


export default Smurfs;