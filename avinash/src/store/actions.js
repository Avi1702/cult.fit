import {
  
  SIGNUP_TODO_LOADING,
  SIGNUP_TODO_SUCCESS,
  SIGNUP_TODO_ERROR,
  LOGIN_TODO_LOADING,
  LOGIN_TODO_SUCCESS,
  LOGIN_TODO_ERROR,
  LOGOUT,
  VERIFY_TODO_LOADING,
  VERIFY_TODO_SUCCESS,
  VERIFY_TODO_ERROR,
  GETLOGIN_TODO_LOADING,
  GETLOGIN_TODO_SUCCESS,
  GETLOGIN_TODO_ERROR,
  GETCART_LOADING,
  GETCART_SUCCESS,
  GETCART_ERROR,
  GET_LAB_TEST,
  LOADING_LAB_TEST,
  ERROR_LAB_TEST,
} from "./actionTypes";

export const signupToDoLoading = () => {
  return {
    type: SIGNUP_TODO_LOADING,
  };
};
export const signupToDoSuccess = (payload) => {
  return {
    type: SIGNUP_TODO_SUCCESS,
    payload
  };
};
export const signupToDoError = () => {
  return {
    type: SIGNUP_TODO_ERROR,
  };
};
export const verifyToDoLoading = () => {
  return {
    type: VERIFY_TODO_LOADING,
  };
};
export const verifyToDoSuccess = (payload) => {
  return {
    type: VERIFY_TODO_SUCCESS,
    payload
  };
};
export const verifyToDoError = () => {
  return {
    type: VERIFY_TODO_ERROR,
  };
};
export const loginToDoLoading = () => {
  return {
    type: LOGIN_TODO_LOADING,
  };
};
export const loginToDoSuccess = (payload) => {
  return {
    type: LOGIN_TODO_SUCCESS,
    payload,
  };
};
export const loginToDoError = () => {
  return {
    type: LOGIN_TODO_ERROR,
  };
};
export const getloginToDoLoading = () => {
  return {
    type: GETLOGIN_TODO_LOADING,
  };
};
export const getloginToDoSuccess = (payload) => {
  return {
    type: GETLOGIN_TODO_SUCCESS,
    payload,
  };
};
export const getloginToDoError = () => {
  return {
    type: GETLOGIN_TODO_ERROR,
  };
};
export const getcartLoading = () => {
  return {
    type: GETCART_LOADING,
  };
};
export const getcartDoSuccess = (payload) => {
  return {
    type: GETCART_SUCCESS,
    payload,
  };
};
export const getcartDoError = () => {
  return {
    type: GETCART_ERROR,
  };
};
export const getLabTest=(payload)=>{
  return {
      type:GET_LAB_TEST,
      payload
  }
}

export const loadingLabTest=()=>{
  return {
      type:LOADING_LAB_TEST,
  }
}
export const ErrorLabTest=()=>{
  return {
      type:ERROR_LAB_TEST,
  }
}

export const logOut = () => {
  return{
    type: LOGOUT,
  };
};
