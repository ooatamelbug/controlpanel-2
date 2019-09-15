import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import  Contentb from './components/content/main/mainc';
import  Contentd from './components/content/pages/button';
import  Red from './components/content/pages/red';
import Typed from './components/content/pages/typed';
import Login from './components/content/pages/login';
import Register from './components/content/pages/reg';
import P4 from './components/content/pages/static/404';
import P5 from './components/content/pages/static/500';

ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  //     <App>
  //         <Route  path='/d1' component={ Contentb }> </Route>
  //         <Route exact path='/' Component={ Contentb }> </Route>
  //         <Route exact path='/b' Component={ Contentd }> </Route>
  //     </App>
  //  </Switch>
  // </BrowserRouter>
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={ Login }></Route>
      <Route path='/reg' component={ Register }></Route>
      <Route path='/500' component={ P5 }></Route>
      <App >
          <Route exact path='/red' component={ Red }></Route>
          <Route exact path='/' component={ Contentb }></Route>
          <Route exact path='/b' component={ Contentd }></Route>
          <Route exact path='/t' component={ Typed }></Route>
      </App>
      <Route component={ P4 }></Route>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
