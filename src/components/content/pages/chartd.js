import React,{Component} from 'react';
import { LineChart, PieChart, BarChart, AreaChart  } from 'react-chartkick';
import 'chart.js';
import { NavLink } from 'react-router-dom';

export default class Chartd extends Component {
      constructor(props){
        super(props);
        this.state = {
          line: [{"2019-12-12":4,"2020-12-12":6,"2022-12-12":12}],
          line2: [{"2019-12-12 00:00:00 0800":4,"2020-12-12 00:00:00 -0800":6,"2022-12-12 00:00:00 -0800":12}],
          line3: [["Blueberry",4],["Blueberry",50],["Strawberry",20]]
        };
      }
      render(){
        return (

        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">
              Chart-js
            </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="#">Charts</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">Chart-js</li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Line chart</h4>
                  <LineChart data={this.state.line[0]} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Bar chart</h4>
                  <PieChart data={this.state.line3} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Area chart</h4>
                  <AreaChart data={this.state.line2[0]} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Doughnut chart</h4>
                  <BarChart  data={this.state.line3} />
                </div>
              </div>
            </div>
          </div>
          </div>
    );
  }
}
