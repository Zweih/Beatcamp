import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

// Normal Action Creators

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  }
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS,
  };
};

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users,
  };
};

// Thunk Action Creators

//    User Thunk Action Creators

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    return SessionApiUtil.fetchUsers().then( (users) => {
      return dispatch(receiveAllUsers(users));
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
    }
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    return SessionApiUtil.fetchUser(userId).then( (user) => {
      return dispatch(receiveUser(user));
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

//    Session Thunk Action Creators

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then( () => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const demo = () => {
  const demoUser = { 
    username: "sennacy",
    password: "password1234",
  };

  return (dispatch) => {
    return SessionApiUtil.login(demoUser).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const clearSessionErrors = () => {
  return (dispatch) => {
    return dispatch(removeSessionErrors());
  };
};