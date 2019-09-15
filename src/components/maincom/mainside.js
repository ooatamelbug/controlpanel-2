import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

let logo1 = require("../../logo.svg");
class MainSide extends Component {
  render(){
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <NavLink to="/" className="nav-link">
              <div className="nav-profile-image">
                <img src={logo1} alt="profile"/>
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">David Grey. H</span>
                <span className="text-secondary text-small">Project Manager</span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <NavLink className="nav-link" to="/red">Buttons</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/t">Typography</NavLink></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="pages/icons/mdi.html">
              <span className="menu-title">Icons</span>
              <i className="mdi mdi-contacts menu-icon"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="pages/forms/basic_elements.html">
              <span className="menu-title">Forms</span>
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span className="menu-title">Charts</span>
              <i className="mdi mdi-chart-bar menu-icon"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/b">
              <span className="menu-title">Tables</span>
              <i className="mdi mdi-table-large menu-icon"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="collapse" to="#general-pages" aria-expanded="false" aria-controls="general-pages">
              <span className="menu-title">Sample Pages</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-medical-bag menu-icon"></i>
            </NavLink>
            <div className="collapse" id="general-pages">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <NavLink className="nav-link" to="/"> Blank Page </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/"> Login </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/"> Register </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/"> 404 </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/"> 500 </NavLink></li>
              </ul>
              </div>
          </li>
          <li className="nav-item sidebar-actions">
            <span className="nav-link">
              <div className="border-bottom">
                <h6 className="font-weight-normal mb-3">Projects</h6>
              </div>
              <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
              <div className="mt-4">
                <div className="border-bottom">
                  <p className="text-secondary">Categories</p>
                </div>
                <ul className="gradient-bullet-list mt-4">
                  <li>Free</li>
                  <li>Pro</li>
                </ul>
              </div>
            </span>
          </li>
        </ul>
      </nav>

    );
  }
}

export default MainSide;
