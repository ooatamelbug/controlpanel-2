import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Formsd extends Component {
  render(){
    return (

        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">
              Forms
            </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="#">Forms</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">Basic elements</li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Default form</h4>
                  <p className="card-description">
                    Basic form layout
                  </p>
                  <form className="forms-sample">
                    <div className="form-group">
                      <label for="exampleInputUsername1">Username</label>
                      <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputConfirmPassword1">Confirm Password</label>
                      <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check form-check-flat form-check-primary">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                        Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Horizontal Form</h4>
                  <p className="card-description">
                    Horizontal form layout
                  </p>
                  <form className="forms-sample">
                    <div className="form-group row">
                      <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="exampleInputUsername2" placeholder="Password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="exampleInputMobile" placeholder="Password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                      <div className="col-sm-9">
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                      <div className="col-sm-9">
                        <input type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
                      </div>
                    </div>
                    <div className="form-check form-check-flat form-check-primary">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                        Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic form elements</h4>
                  <p className="card-description">
                    Basic form elements
                  </p>
                  <form className="forms-sample">
                    <div className="form-group">
                      <label for="exampleInputName1">Name</label>
                      <input type="text" className="form-control" id="exampleInputName1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail3">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword4">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleSelectGender">Gender</label>
                        <select className="form-control" id="exampleSelectGender">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    <div className="form-group">
                      <label>File upload</label>
                      <input type="file" name="img[]" className="file-upload-default"/>
                      <div className="input-group col-xs-12">
                        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                        <span className="input-group-append">
                          <button className="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputCity1">City</label>
                      <input type="text" className="form-control" id="exampleInputCity1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleTextarea1">Textarea</label>
                      <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Input size</h4>
                  <p className="card-description">
                    Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.
                  </p>
                  <div className="form-group">
                    <label>Large input</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Password"aria-label="Username"/>
                  </div>
                  <div className="form-group">
                    <label>Default input</label>
                    <input type="text" className="form-control" placeholder="Password" aria-label="Username"/>
                  </div>
                  <div className="form-group">
                    <label>Small input</label>
                    <input type="text" className="form-control form-control-sm" placeholder="Password" aria-label="Username"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Select size</h4>
                  <p className="card-description">
                    Add classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.
                  </p>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">Large select</label>
                    <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect2">Default select</label>
                    <select className="form-control" id="exampleFormControlSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect3">Small select</label>
                    <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic input groups</h4>
                  <p className="card-description">
                    Basic bootstrap input groups
                  </p>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-gradient-primary text-white">$</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                      <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <div className="input-group-prepend">
                        <span className="input-group-text">0.00</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <div className="input-group-append">
                        <button className="btn btn-sm btn-gradient-primary" type="button">Search</button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                        <div className="dropdown-menu">
                          <NavLink className="dropdown-item" to="#">Action</NavLink>
                          <NavLink className="dropdown-item" to="#">Another action</NavLink>
                          <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                          <div role="separator" className="dropdown-divider"></div>
                          <NavLink className="dropdown-item" to="#">Separated link</NavLink>
                        </div>
                      </div>
                      <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Find in facebook" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <div className="input-group-append">
                        <button className="btn btn-sm btn-facebook" type="button">
                          <i className="mdi mdi-facebook"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Checkbox Controls</h4>
                  <p className="card-description">Checkbox and radio controls (default appearance is in primary color)</p>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input"/>
                              Default
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" checked/>
                              Checked
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" disabled/>
                              Disabled
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" disabled checked/>
                              Disabled checked
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value=""/>
                              Default
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked/>
                              Selected
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios3" value="option3" disabled/>
                              Disabled
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optionsRadio2" id="optionsRadios4" value="option4" disabled checked/>
                              Selected and disabled
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                  <p className="card-description">Add class <code>.form-check-</code> for checkbox and radio controls in theme colors</p>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-check form-check-primary">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" checked/>
                              Primary
                            </label>
                          </div>
                          <div className="form-check form-check-success">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" checked/>
                              Success
                            </label>
                          </div>
                          <div className="form-check form-check-info">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" checked/>
                              Info
                            </label>
                          </div>
                          <div className="form-check form-check-danger">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" checked/>
                              Danger
                            </label>
                          </div>
                          <div className="form-check form-check-warning">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" checked/>
                              Warning
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-check form-check-primary">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio1" id="ExampleRadio1" checked/>
                              Primary
                            </label>
                          </div>
                          <div className="form-check form-check-success">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio2" id="ExampleRadio2" checked/>
                              Success
                            </label>
                          </div>
                          <div className="form-check form-check-info">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio3" id="ExampleRadio3" checked/>
                              Info
                            </label>
                          </div>
                          <div className="form-check form-check-danger">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio4" id="ExampleRadio4" checked/>
                              Danger
                            </label>
                          </div>
                          <div className="form-check form-check-warning">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio5" id="ExampleRadio5" checked/>
                              Warning
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Inline forms</h4>
                  <p className="card-description">
                    Use the <code>.form-inline</code> class to display a series of labels, form controls, and buttons on a single horizontal row
                  </p>
                  <form className="form-inline">
                    <label className="sr-only" for="inlineFormInputName2">Name</label>
                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>

                    <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Password" />
                    </div>
                    <div className="form-check mx-sm-2">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" checked/>
                        Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mb-2">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Horizontal Two column</h4>
                  <form className="form-sample">
                    <p className="card-description">
                      Personal info
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">First Name</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Last Name</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Gender</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Date of Birth</label>
                          <div className="col-sm-9">
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Category</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>Category1</option>
                              <option>Category2</option>
                              <option>Category3</option>
                              <option>Category4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Membership</label>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked/>
                                Free
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2"/>
                                Professional
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="card-description">
                      Address
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Address 1</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">State</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Address 2</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Postcode</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">City</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Country</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>America</option>
                              <option>Italy</option>
                              <option>Russia</option>
                              <option>Britain</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
