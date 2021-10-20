import React from "react";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";
import Header from '../components/Layout/Header/header'
import SideBar from '../components/Layout/SideBar/sidebar'


$('#timepicker').datetimepicker({
  format: 'LT'
})

function WorkspacePage({ children }) {
  return (
    <div>
      <TopHeader headerValue="Workspace Management" />
      <section className="content">
        <div class="modal fade" id="modal-lg-new">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Add New Workspace</h3>
                  </div>


                  <form>
                    <div class="card-body">
                      <div class="form-group">
                        <label for="workspace-name">Workspace Name</label>
                        <input type="text" class="form-control" id="workspace-name" placeholder="Enter Workspace name"></input>
                      </div>
                      <div class="form-group">
                        <label for="workspace-address">Workspace Address</label>
                        <textarea class="form-control" rows="2" id="workspace-address" placeholder="Enter address"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="workspace-description">Workspace Description</label>
                        <textarea class="form-control" rows="4" id="workspace-description" placeholder="Enter description"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="workspace-type">Workspace Type</label>
                        <select class="form-control" id="workspace-type">
                          <option>Conference Hall</option>
                          <option>Meeting Room</option>
                          <option>Office Space</option>
                          <option>Coworking Space</option>
                          <option>Virtual Office</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="workspace-type">Workspace Facilities</label>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"></input>
                          <label class="form-check-label">WiFi</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"></input>
                          <label class="form-check-label">Electricity</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"></input>
                          <label class="form-check-label">Food</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="owner-name">Owner Name</label>
                        <input type="text" class="form-control" id="owner-name" placeholder="Enter name"></input>
                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Opening Time (WeekDays)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekdays-opening"/>
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Closing Time (WeekDays)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekdays-closing"/>
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Opening Time (Weekend)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekend-opening" />
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Closing Time (Weekend)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekend-closing" />
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="form-group">
                        <label for="exampleInputFile">Workspace Image</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="workspace-image"></input>
                            <label class="custom-file-label" for="workspace-image">Choose file</label>
                          </div>
                          <div class="input-group-append">
                            <span class="input-group-text">Upload</span>
                          </div>
                        </div>
                      </div>
                    </div>



                  </form>
                </div>

              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Create New Workspace</button>
              </div>
            </div>

          </div>

        </div>




        <div class="modal fade" id="modal-lg-edit">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
              <h4 class="modal-title">Edit Workspace</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="card card-primary">
                 


                  <form>
                    <div class="card-body">
                      <div class="form-group">
                        <label for="workspace-name">Workspace Name</label>
                        <input type="text" class="form-control" id="workspace-name" placeholder="Enter Workspace name"></input>
                      </div>
                      <div class="form-group">
                        <label for="workspace-address">Workspace Address</label>
                        <textarea class="form-control" rows="2" id="workspace-address" placeholder="Enter address"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="workspace-description">Workspace Description</label>
                        <textarea class="form-control" rows="4" id="workspace-description" placeholder="Enter description"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="workspace-type">Workspace Type</label>
                        <select class="form-control" id="workspace-type">
                          <option>Conference Hall</option>
                          <option>Meeting Room</option>
                          <option>Office Space</option>
                          <option>Coworking Space</option>
                          <option>Virtual Office</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="workspace-type">Workspace Facilities</label>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"></input>
                          <label class="form-check-label">WiFi</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"></input>
                          <label class="form-check-label">Electricity</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"></input>
                          <label class="form-check-label">Food</label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="owner-name">Owner Name</label>
                        <input type="text" class="form-control" id="owner-name" placeholder="Enter name"></input>
                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Opening Time (WeekDays)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekdays-opening"/>
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Closing Time (WeekDays)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekdays-closing"/>
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Opening Time (Weekend)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekend-opening" />
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="bootstrap-timepicker">
                        <div class="form-group">
                          <label for="open-time">Closing Time (Weekend)</label>

                          <div class="input-group date" id="timepicker" data-target-input="nearest">
                            <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" id="weekend-closing" />
                            <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="far fa-clock"></i></div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div class="form-group">
                        <label for="exampleInputFile">Workspace Image</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="workspace-image"></input>
                            <label class="custom-file-label" for="workspace-image">Choose file</label>
                          </div>
                          <div class="input-group-append">
                            <span class="input-group-text">Upload</span>
                          </div>
                        </div>
                      </div>
                    </div>



                  </form>
                </div>

              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Update Workspace</button>
              </div>
            </div>

          </div>

        </div>


        <div class="modal fade" id="modal-danger">
        <div class="modal-dialog">
          <div class="modal-content bg-danger">
            <div class="modal-header">
              <h4 class="modal-title">Confirm Delete</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Do you really want to delete this workspace? This action cannot be undone&hellip;</p>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-outline-light">Confirm Delete</button>
            </div>
          </div>
        </div>
      </div>



        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Workspaces</h3>
                  <a href="#" class="btn btn-sm btn-success float-right" data-toggle="modal" data-target="#modal-lg-new">Add Workspace</a>
                  <div className="card-tools">
                    <div
                      className="input-group input-group-sm"
                      style={{ width: "150px" }}
                    ></div>
                  </div>
                </div>
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>

                        <th>Workspace Name</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th>Owner Name</th>
                        <th>WeekDays Time</th>
                        <th>WorkDays Time</th>
                        <th>Workspace Type</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>Cyber Park</td>
                        <td>Address123</td>
                        <td>Descri</td>
                        <td>John Doe</td>
                        <td>9.30 - 12.30</td>
                        <td>8.30 - 5.30</td>
                        <td>Conference Hall</td>
                        <td> <div class="text-center">
                          <a href="#" class="btn btn-sm btn-primary"  data-toggle="modal" data-target="#modal-lg-edit">Edit</a>
                          &nbsp;
                          <a href="#" class="btn btn-sm btn-danger"data-toggle="modal" data-target="#modal-danger">Delete</a>
                        </div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkspacePage;
