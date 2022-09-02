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
} from "./actionTypes";

const initialState = {
  login: {
    loading: false,
    error: false,
    token: null,
    email: null
  },
  profile:{
    loading:false,
    error:false,
    user:[]
  },
  signup: {
    loading: false,
    error: false,
    signtoken:null
  },
  verify:{
    loading:false,
    error:false,
  },
  cart: {
    loading: false,
    error: false,
    cart: [],
    grandtotal:0
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_TODO_LOADING:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: true,
        },
      };
    case SIGNUP_TODO_SUCCESS:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          error: false,
          signtoken:action.payload
        },
      };
    case SIGNUP_TODO_ERROR:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          error: true,
        },
      };
      case GETCART_LOADING:
        return {
          ...state,
          cart: {
            ...state.cart,
            loading: true,
          },
        };
      case GETCART_SUCCESS:
        return {
          ...state,
          cart: {
            ...state.cart,
            loading: false,
            error: false,
            cart:action.payload.cart,
            grandtotal:action.payload.Grandtotal
          },
        };
      case GETCART_ERROR:
        return {
          ...state,
          cart: {
            ...state.cart,
            loading: false,
            error: true,
          },
        };
      case VERIFY_TODO_LOADING:
        return {
          ...state,
          verify: {
            ...state.verify,
            loading: true,
          },
        };
      case VERIFY_TODO_SUCCESS:
        return {
          ...state,
          verify: {
            ...state.verify,
            loading: false,
            error: false,
          },
        };
      case VERIFY_TODO_ERROR:
        return {
          ...state,
          verify: {
            ...state.verify,
            loading: false,
            error: true,
          },
        };
    case LOGIN_TODO_LOADING:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    case LOGIN_TODO_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: false,
          token:localStorage.getItem("culttoken"),
          email:action.payload.user.email
        },
      };
    case LOGIN_TODO_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: true,
        },
      };
      case GETLOGIN_TODO_LOADING:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: true,
        },
      };
    case GETLOGIN_TODO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: false,
          error: false,
          user:action.payload
        },
      };
    case GETLOGIN_TODO_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: false,
          error: true,
        },
      };
      case LOGOUT:
      return {
        ...state,
        login: {
          ...state.login,
          loading:false,
          error:false,
          token: null,
          email: null
        },
        profile:{
          ...state.profile,
          user:[]
        },
        cart:{
          ...state.cart,
          cart: [],
          grandtotal:0
        }
      };

    default:
      return { ...state };
  }
};
