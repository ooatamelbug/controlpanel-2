import React,{Component} from 'react';
// import { GeoChart  } from 'react-chartkick';
// import { NavLink } from 'react-router-dom';
import {ColumnChart , PieChart } from 'react-chartkick';
import 'chart.js';
let logo1 = require("../../../logo.svg");
class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      line2: [["Germany",4],["Brazil",50],["Egypt",20]],
      line3: [["Blueberry",4],["Blueberry",50],["Strawberry",20]]
    };
  }

  render(){
    return (
             <div className="content-wrapper">
               <div className="page-header">
                 <h3 className="page-title">
                   <span className="page-title-icon bg-gradient-primary text-white mr-2">
                     <i className="mdi mdi-home"></i>
                   </span>
                   Dashboard
                 </h3>
                 <nav aria-label="breadcrumb">
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item active" aria-current="page">
                     </li>
                   </ul>
                 </nav>
               </div>
               <div className="row">
                 <div className="col-md-4 stretch-card grid-margin">
                   <div className="card bg-gradient-danger card-img-holder text-white">
                     <div className="card-body">
                       <img src="images/dashboard/circle.svg" className="card-img-absolute" alt=""/>
                       <h4 className="font-weight-normal mb-3">Weekly Sales
                         <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                       </h4>
                       <h2 className="mb-5">$ 15,0000</h2>
                       <h6 className="card-text">Increased by 60%</h6>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-4 stretch-card grid-margin">
                   <div className="card bg-gradient-info card-img-holder text-white">
                     <div className="card-body">
                       <img src="images/dashboard/circle.svg" className="card-img-absolute" alt=""/>
                       <h4 className="font-weight-normal mb-3">Weekly Orders
                         <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                       </h4>
                       <h2 className="mb-5">45,6334</h2>
                       <h6 className="card-text">Decreased by 10%</h6>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-4 stretch-card grid-margin">
                   <div className="card bg-gradient-success card-img-holder text-white">
                     <div className="card-body">
                       <img src="images/dashboard/circle.svg" className="card-img-absolute" alt=""/>
                       <h4 className="font-weight-normal mb-3">Visitors Online
                         <i className="mdi mdi-diamond mdi-24px float-right"></i>
                       </h4>
                       <h2 className="mb-5">95,5741</h2>
                       <h6 className="card-text">Increased by 5%</h6>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-7 grid-margin stretch-card">
                   <div className="card">
                     <div className="card-body">
                       <div className="clearfix">
                         <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                         <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right"></div>
                         <ColumnChart data={this.state.line2} />
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-5 grid-margin stretch-card">
                   <div className="card">
                     <div className="card-body">
                       <h4 className="card-title">Traffic Sources</h4>
                       <PieChart data={this.state.line3} />
                       <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-12 grid-margin">
                   <div className="card">
                     <div className="card-body">
                       <h4 className="card-title">Recent Tickets</h4>
                       <div className="table-responsive">
                         <table className="table">
                           <thead>
                             <tr>
                               <th>
                                 Assignee
                               </th>
                               <th>
                                 Subject
                               </th>
                               <th>
                                 Status
                               </th>
                               <th>
                                 Last Update
                               </th>
                               <th>
                                 Tracking ID
                               </th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td>
                                 <img src={logo1} className="mr-2" alt=""/>
                                 David Grey
                               </td>
                               <td>
                                 Fund is not recieved
                               </td>
                               <td>
                                 <label className="badge badge-gradient-success">DONE</label>
                               </td>
                               <td>
                                 Dec 5, 2017
                               </td>
                               <td>
                                 WD-12345
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 <img src={logo1} className="mr-2" alt=""/>
                                 Stella Johnson
                               </td>
                               <td>
                                 High loading time
                               </td>
                               <td>
                                 <label className="badge badge-gradient-warning">PROGRESS</label>
                               </td>
                               <td>
                                 Dec 12, 2017
                               </td>
                               <td>
                                 WD-12346
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 <img src={logo1} className="mr-2" alt=""/>
                                 Marina Michel
                               </td>
                               <td>
                                 Website down for one week
                               </td>
                               <td>
                                 <label className="badge badge-gradient-info">ON HOLD</label>
                               </td>
                               <td>
                                 Dec 16, 2017
                               </td>
                               <td>
                                 WD-12347
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 <img src={logo1} className="mr-2" alt=""/>
                                 John Doe
                               </td>
                               <td>
                                 Loosing control on server
                               </td>
                               <td>
                                 <label className="badge badge-gradient-danger">REJECTED</label>
                               </td>
                               <td>
                                 Dec 3, 2017
                               </td>
                               <td>
                                 WD-12348
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-12 grid-margin stretch-card">
                   <div className="card">
                     <div className="card-body">
                       <h4 className="card-title">Recent Updates</h4>
                       <div className="d-flex">
                         <div className="d-flex align-items-center mr-4 text-muted font-weight-light">
                           <i className="mdi mdi-account-outline icon-sm mr-2"></i>
                           <span>jack Menqu</span>
                         </div>
                         <div className="d-flex align-items-center text-muted font-weight-light">
                           <i className="mdi mdi-clock icon-sm mr-2"></i>
                           <span>October 3rd, 2018</span>
                         </div>
                       </div>
                       <div className="row mt-3">
                         <div className="col-6 pr-1">
                           <img src="images/dashboard/img_1.jpg" className="mb-2 mw-100 w-100 rounded" alt=""/>
                           <img src="images/dashboard/img_4.jpg" className="mw-100 w-100 rounded" alt=""/>
                         </div>
                         <div className="col-6 pl-1">
                           <img src="images/dashboard/img_2.jpg" className="mb-2 mw-100 w-100 rounded" alt=""/>
                           <img src="images/dashboard/img_3.jpg" className="mw-100 w-100 rounded" alt=""/>
                         </div>
                       </div>
                       <div className="d-flex mt-5 align-items-top">
                         <img src={logo1} className="img-sm rounded-circle mr-3" alt=""/>
                         <div className="mb-0 flex-grow">
                           <h5 className="mr-2 mb-2">School Website - Authentication Module.</h5>
                           <p className="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable
                             content of a page.</p>
                         </div>
                         <div className="ml-auto">
                           <i className="mdi mdi-heart-outline text-muted"></i>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12 grid-margin stretch-card">
                   <div className="card">
                     <div className="card-body">
                       <h4 className="card-title">Project Status</h4>
                       <div className="table-responsive">
                         <table className="table">
                           <thead>
                             <tr>
                               <th>
                                 #
                               </th>
                               <th>
                                 Name
                               </th>
                               <th>
                                 Due Date
                               </th>
                               <th>
                                 Progress
                               </th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td>
                                 1
                               </td>
                               <td>
                                 Herman Beck
                               </td>
                               <td>
                                 May 15, 2015
                               </td>
                               <td>
                                 <div className="progress">
                                   <div className="progress-bar bg-gradient-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 2
                               </td>
                               <td>
                                 Messsy Adam
                               </td>
                               <td>
                                 Jul 01, 2015
                               </td>
                               <td>
                                 <div className="progress">
                                   <div className="progress-bar bg-gradient-danger" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 3
                               </td>
                               <td>
                                 John Richards
                               </td>
                               <td>
                                 Apr 12, 2015
                               </td>
                               <td>
                                 <div className="progress">
                                   <div className="progress-bar bg-gradient-warning" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 4
                               </td>
                               <td>
                                 Peter Meggik
                               </td>
                               <td>
                                 May 15, 2015
                               </td>
                               <td>
                                 <div className="progress">
                                   <div className="progress-bar bg-gradient-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 5
                               </td>
                               <td>
                                 Edward
                               </td>
                               <td>
                                 May 03, 2015
                               </td>
                               <td>
                                 <div className="progress">
                                   <div className="progress-bar bg-gradient-danger" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 5
                               </td>
                               <td>
                                 Ronald
                               </td>
                               <td>
                                 Jun 05, 2015
                               </td>
                               <td>
                                 <div className="progress">
                                   <div className="progress-bar bg-gradient-info" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

    );
  }
}

export default Content;
