import {
  LOGINFAIL_ACTION,
  LOGIN_ACTION,
  AUTH_ACTION,
  LOGOUT_ACTION,
  LOGOUTFAIL_ACTION
} from '../action';


const initalstat ={
  user:{name:'moh',email:'email.com'},
  token: null,
  login : false
}

export const authApp = (state= initalstat,action)=>{
  switch (action.type) {
    case LOGINFAIL_ACTION:
    return state = {
          ...state,
          user : null,
          login: false,
          token: null,
          msg : action.payload.msg
        };
    case LOGIN_ACTION:
    return state = {
          ...state,
          user : action.payload.user,
          login: action.payload.login,
          token: action.payload.token
        };
    case LOGOUT_ACTION:
      // localStorage.removeItem('userc');
      return state = {
          ...state,
          user: null,
          login: false,
          token: null,
          msg : action.payload.msg
        };
    case LOGOUTFAIL_ACTION:
      return state = {
        ...state,
        msg : action.payload.msg
      };
    case AUTH_ACTION: 
      const user = JSON.parse(localStorage.getItem('userc'));
      return state = {
          ...state,
          user:user,
          login:true,
          token: action.payload.token
        };
    default:
      return state;
  }
}
