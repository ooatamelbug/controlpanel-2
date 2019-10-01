import {
  FAILREG_ACTION,
  REG_ACTION

} from '../action';

const initalstat = {
  name : '',
  password : '',
  email: '',
  agree: false,
  country: '',
  msg: null
};


export const regesterApp = (state= initalstat,action)=>{
  switch (action.type) {
    case FAILREG_ACTION:
      return state = {
        ...state,
        msg : action.payload.msg
      };
    case REG_ACTION:
      state = {
        ...state,
        name:action.pyload.name,
        password:action.pyload.password,
        email:action.pyload.email,
        agree:action.pyload.agree,
        country:action.pyload.country,
        msg:action.pyload.msg
      }
      localStorage.setItem('users',JSON.stringify(state));
      return state;

    default: return state;

  }
}
