// import { authApp } from '../reducer/authred';



export const loginfun = (getState)=>{
  let user = localStorage.getItem('userc');
  if(!user){
    let users = JSON.parse(localStorage.getItem('users'));
    if(users !== null){
    if( getState.emaildd !== '' && getState.passworddd !== ''){
      const userd = users.filter((user)=>{
        return user.email === getState.emaildd && user.password === getState.passworddd;
      });
      if(userd){
        return{
          type   : "LOGIN_ACTION",
          payload:{
            user: userd,
            login: true,
            msg: 'hello ' + userd.name,
            token : new Date().toISOString()
          }
        };
      }else {
        return{
          type   : "LOGINFAIL_ACTION",
          payload:{
            msg: 'no user'
          }
        };
      }
    }else{
      return{
        type   : "LOGINFAIL_ACTION",
        payload:{
          msg: 'no valid'
        }
      };
    }
    }else{
      return{
        type   : "LOGINFAIL_ACTION",
        payload:{
          msg: 'no reg'
        }
      };
    }
  }
}
export const logOutFun = ()=>{
  let user = localStorage.getItem('userc');
  if(user){
    return{
      type   : "LOGOUT_ACTION",
      payload:{
        msg: 'LOG'
      }
    }
  }else{
    return{
      type   : "LOGOUTFAIL_ACTION",
      payload:{
        msg: 'LOG'
      }
    }
  }
}
export const regesterAp = (getState)=>{
  let users = JSON.parse(localStorage.getItem('users'));
  if(users){
    if(users.filter((user)=>{
    return user.email ===  getState.email;
  }).length > 0){
    if(getState.name !== '' && getState.password !== '' && getState.email !== '' && getState.country !== ''){
      users.push({name:getState.name,agree:getState.agree,password:getState.password,email:getState.email,country:getState.country});
        return {
          type: "REG_ACTION",
          payload:{
            login: false,
            name: getState.name,
            password: getState.password,
            email: getState.email,
            agree: getState.agree,
            country: getState.country,
            msg: 'login',
          }
        }
    }else{
      return {
        type: "FAILREG_ACTION",
        payload:{
          login: false,
          msg: 'fail vaild'
        }
      }
    }
  }else{
    return {
      type: "FAILREG_ACTION",
      payload:{
        login: false,
        msg: 'fail no'
      }
    }
  }
  }else{
    if(getState.name !== '' && getState.password !== '' && getState.email !== '' && getState.country !== ''){
      return {
      type: "REG_ACTION",
      payload:{
        login: false,
        name: getState.name,
        password: getState.password,
        email: getState.email,
        agree: getState.agree,
        country: getState.country,
        msg: 'login',
      }
    }
  }else{
    return {
      type: "FAILREG_ACTION",
      payload:{
        login: false,
        msg: 'fail vaild'
      }
    }
  }
}
}