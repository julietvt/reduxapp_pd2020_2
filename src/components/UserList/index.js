import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionsType.js';

class UserList extends Component {
  loadUsers = () => {
    this.props.getUsersRequest();
    fetch('../../dbUser.json')
      .then((response) => response.json())
      .then((data) => this.props.getUsersSuccess(data))
      .catch((e) => this.props.getUsersError(e));
  };

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    if (this.props.error) {
      return <div>Error!!!</div>;
    }
    if (this.props.isFetching) {
      return <div>LOAD...</div>;
    }

    return (
      <ul>
        {this.props.users.map((u) => (
          <li key={u.id}>{`${u.fName} ${u.lName}`}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const { usersState } = state;
  return usersState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersRequest: () => dispatch({ type: ACTION_TYPES.GET_USERS_REQUEST }),
    getUsersSuccess: (data) =>
      dispatch({ type: ACTION_TYPES.GET_USERS_SUCCESS, users: data }),
    getUsersError: (error) =>
      dispatch({ type: ACTION_TYPES.GET_USERS_ERROR, error }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
