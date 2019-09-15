import React ,{Component} from 'react';
import { NavLink } from 'react-router-dom';
let logo1 = require("../../../logo.svg");

export default class Login extends Component {
  render(){
    return (

        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth">
              <div className="row w-100">
                <div className="col-lg-4 mx-auto">
                  <div className="auth-form-light text-left p-5">
                    <div className="brand-logo">
                      <img src={logo1} />
                    </div>
                    <h4>Hello! let's get started</h4>
                    <h6 className="font-weight-light">Sign in to continue.</h6>
                    <form className="pt-3">
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      <div className="mt-3">
                        <NavLink className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" to="/">SIGN IN</NavLink>
                      </div>
                      <div className="my-2 d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input type="checkbox" className="form-check-input"/>
                            Keep me signed in
                          </label>
                        </div>
                        <NavLink to="#" className="auth-link text-black">Forgot password?</NavLink>
                      </div>
                      <div className="mb-2">
                        <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                          <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                        </button>
                      </div>
                      <div className="text-center mt-4 font-weight-light">
                        Don't have an account? <NavLink to="/" className="text-primary">Create</NavLink>
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
