import React,{Component} from 'react';
import Main from './components/maincom/main';
import MainSide from './components/maincom/mainside';
import Footer from './components/content/main/footer';
// import { Switch,Route,NavLink } from 'react-router-dom';
// import  Content from './components/content/main/mainc';
// import  Content2 from './components/content/pages/button';



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
  looding : true
      }
  };
  render(){
    return (
      <div className="container-scroller">
        <Main />
        <div className="container-fluid page-body-wrapper">
          <MainSide />
            <div className="main-panel">
              <div>
                {this.props.children}
              </div>            
              <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
