import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  return (
    <>
      <h1>{props.value}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </>
  );
};

const mapStateToProps = (state) => {
  const { value } = state;
  return {
    value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
/*
const WithReduxStore = connect(mapStateToProps);
const CounterConectToReduxStore = WithReduxStore(Counter);
export default CounterConectToReduxStore;
*/
