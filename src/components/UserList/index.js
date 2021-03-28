import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionsType.js';

const UserList = (props) => {
  const {
    isFetching,
    users,
    error,
    getUsersRequest,
    getUsersSuccess,
    getUsersError,
  } = props;

  const loadUsers = () => {
    getUsersRequest();
    /*
    fetch('./dbUser.json')
      .then((response) => response.json())
      .then((data) => getUsersSuccess(data))
      .catch((e) => getUsersError(e));
*/
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (error) {
    return <div>Error!!!</div>;
  }
  if (isFetching) {
    return <div>LOAD...</div>;
  }

  return (
    <>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{`${u.fName} ${u.lName}`}</li>
        ))}
      </ul>
    </>
  );
};

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
