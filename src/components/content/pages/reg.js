import React ,{Component} from 'react';
import { NavLink ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  regesterAp
} from '../../../actions/authaction';
let logo1 = require("../../../logo.svg");

class Register extends Component {
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
                <img src={logo1} alt=""/>
                {this.redic()}
              </div>
                    {this.props.reg.msg ? this.props.reg.msg : ''}
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form className="pt-3" onSubmit={this.props.regesterAp} autoComplete="off" >
                <div className="form-group">
                  <input type="text" name="name" className="form-control form-control-lg" onChange={this.changeVal}  id="exampleInputUsername1" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control form-control-lg" onChange={this.changeVal} id="exampleInputEmail1" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <select className="form-control form-control-lg"name="country" onChange={this.changeVal} id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option value="America">United States of America</option>
                    <option value="Kingdom">United Kingdom</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="Argentina">Argentina</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="password"  onChange={this.changeVal} name="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" name="agree" onChange={this.changeVal}  className="form-check-input" />
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <NavLink to="/login" className="text-primary">Login</NavLink>
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
    regesterAp: (e)=>{
      e.preventDefault();
      const input = e.target;
      const  {name,email,password,country} = input;
      const agree = input.agree.type === "checkbox" ? input.agree.checked : input.agree.value;
      let emailu = email.value;
      let passwordu = password.value;
      let named = name.value;
      let countryd= country.value;
      const arg = {email:emailu,password:passwordu,name:named,agree:agree,country:countryd};
      console.log(arg);
      dispatch(regesterAp(arg));
    }
  };
};
export default connect(mapStateToProps,mapDespatchToProps)(Register);