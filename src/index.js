import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './components/content/pages/login';
import Register from './components/content/pages/reg';
import P4 from './components/content/pages/static/404';
import P5 from './components/content/pages/static/500';
import {Provider} from 'react-redux';
import {StoreApp} from './store';

ReactDOM.render(
  <Provider store={StoreApp}>
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={ Login }></Route>
      <Route exact path='/reg' component={ Register }></Route>
      <Route exact path='/500' component={ P5 }></Route>
      <Route exact path="/404" component={ P4 }></Route>
      <App/>
      <Route exact path="*" component={ P4 }></Route>
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
