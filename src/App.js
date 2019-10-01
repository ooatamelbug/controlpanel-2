import React,{Component} from 'react';
import Main from './components/maincom/main';
import MainSide from './components/maincom/mainside';
import Footer from './components/content/main/footer';
import {Route, Redirect} from 'react-router-dom';
import  Formsd from './components/content/pages/form';
import  Icons from './components/content/pages/icons';
import  Contentb from './components/content/main/mainc';
import  Chartd from './components/content/pages/chartd';
import  Contentd from './components/content/pages/button';
import  Red from './components/content/pages/red';
import Typed from './components/content/pages/typed';
import { connect } from 'react-redux';
import {
  loginfun,logOutFun
} from './actions/authaction';

class App extends Component {
  state ={
      // looding : true,
      redirect : false,
      pages : ['chartd','icons','f','red','b','t','']
    }
    redirctstat = () =>{
      this.setState({
        redirect: true
      });
    }
    componentDidMount() {
      // console.log('asfkjafhj');
      // console.log(this.props.user.user.name);
        
      }

  redic = () =>{
    if(this.state.redirect){
      return <Redirect to='/404' />
    }
  }

  redicerror = ()=>{
    if(this.props.user.token === null){
      // console.log(this.props.user.user.email);
      return <Redirect to='/login' />

      }
  }

  render(){
    const { location } = this.props
    const red = this.state.pages.some((loc)=>{return  loc === location.pathname.slice(1,);});
    if(red === false){
        this.redirctstat();
      };

    return (
      <div className="container-scroller">
        <Main user={this.props.user} logOutFun={this.props.logOutFun} />
        <div className="container-fluid page-body-wrapper">
          <MainSide  user={this.props.user} />
            <div className="main-panel">
              <div>
              {this.state.redirect}
              {/* {this.redic()} */}
              {/* {this.redicerror()} */}
              <Route exact path='/chartd' component={ Chartd }></Route>
              <Route exact path='/icons' component={ Icons }></Route>
              <Route exact path='/f' component={ Formsd }></Route>
              <Route exact path='/red' component={ Red }></Route>
              <Route exact path='/' component={ Contentb }></Route>
              <Route exact path='/b' component={ Contentd }></Route>
              <Route exact path='/t' component={ Typed }></Route>
              </div>
              <Footer/>
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
    loginfun: (state)=>{
      dispatch(loginfun(state));
    },
    logOutFun: ()=>{
      dispatch(logOutFun());
    }
  };
};
export default connect(mapStateToProps,mapDespatchToProps)(App);
