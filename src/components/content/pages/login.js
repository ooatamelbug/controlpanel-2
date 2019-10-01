import React ,{Component} from 'react';
import { NavLink, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loginfun
} from '../../../actions/authaction';
// import { log } from 'util';

let logo1 = require("../../../logo.svg");

class Login extends Component {
  
  redic = () =>{
    if(this.props.user.login){
      return <Redirect to='/' />
    }
  }
  render(){
    return (

        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth">
              <div className="row w-100">
                <div className="col-lg-4 mx-auto">
                  <div className="auth-form-light text-left p-5">
                    <div className="brand-logo">
                      <img src={logo1} alt="" />
                      {this.redic()}
                    </div>
                    {/* {this.state.emaildd !== null ? this.props.loginfun(this.state): null} */}
                    <h4>Hello! let's get started</h4>
                    <h6 className="font-weight-light">Sign in to continue.</h6>
                    {this.props.user.msg ? this.props.user.msg : ''}
                    <form className="pt-3" autoComplete="off" onSubmit={this.props.loginfun} >
                      <div className="form-group">
                        <input type="email" name="email" onChange={this.changeVal}  className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" onChange={this.changeVal}  className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      <div className="mt-3">
                        <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" to="/">SIGN IN</button>
                      </div>
                      <div className="my-2 d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input type="checkbox" className="form-check-input" onChange={this.changeVal} />
                            Keep me signed in
                          </label>
                        </div>
                        <NavLink to="#" className="auth-link text-black">Forgot password?</NavLink>
                      </div>
                      
                      <div className="text-center mt-4 font-weight-light">
                        Don't have an account? <NavLink to="/reg" className="text-primary">Create</NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    user:state.user,
    reg: state.reg
  };
};
const mapDespatchToProps = (dispatch)=>{
  return {
    loginfun: (e)=>{
      e.preventDefault();
      const input = e.target;
      const  {email,password} = input;
      let emailu = email.value;
      let passwordu = password.value;
      const arg = {emaildd:emailu,passworddd:passwordu};
      console.log(arg);
      dispatch(loginfun(arg));
    }
  };
};
export default connect(mapStateToProps,mapDespatchToProps)(Login);