import React from "react";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";
import Header from "../components/Layout/Header/header";
import SideBar from "../components/Layout/SideBar/sidebar";

function WorkspacePage({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <TopHeader headerValue="Workspace Management" />

        <section className="content">
          <div className="modal fade" id="modal-lg-new">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Add New Workspace</h3>
                    </div>

                    <form>
                      <div className="card-body">
                        <div className="form-group">
                          <label for="workspace-name">Workspace Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="workspace-name"
                            placeholder="Enter Workspace name"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="workspace-address">
                            Workspace Address
                          </label>
                          <textarea
                            className="form-control"
                            rows="2"
                            id="workspace-address"
                            placeholder="Enter address"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="workspace-description">
                            Workspace Description
                          </label>
                          <textarea
                            className="form-control"
                            rows="4"
                            id="workspace-description"
                            placeholder="Enter description"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="workspace-type">Workspace Type</label>
                          <select className="form-control" id="workspace-type">
                            <option>Conference Hall</option>
                            <option>Meeting Room</option>
                            <option>Office Space</option>
                            <option>Coworking Space</option>
                            <option>Virtual Office</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="workspace-type">
                            Workspace Facilities
                          </label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            ></input>
                            <label className="form-check-label">WiFi</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            ></input>
                            <label className="form-check-label">Electricity</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            ></input>
                            <label className="form-check-label">Food</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="owner-name">Owner Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="owner-name"
                            placeholder="Enter name"
                          ></input>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Opening Time (WeekDays)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekdays-opening"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Closing Time (WeekDays)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekdays-closing"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Opening Time (Weekend)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekend-opening"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Closing Time (Weekend)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekend-closing"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputFile">Workspace Image</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="workspace-image"
                              ></input>
                              <label
                                className="custom-file-label"
                                for="workspace-image"
                              >
                                Choose file
                              </label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Create New Workspace
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="modal-lg-edit">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit Workspace</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="card card-primary">
                    <form>
                      <div className="card-body">
                        <div className="form-group">
                          <label for="workspace-name">Workspace Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="workspace-name"
                            placeholder="Enter Workspace name"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="workspace-address">
                            Workspace Address
                          </label>
                          <textarea
                            className="form-control"
                            rows="2"
                            id="workspace-address"
                            placeholder="Enter address"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="workspace-description">
                            Workspace Description
                          </label>
                          <textarea
                            className="form-control"
                            rows="4"
                            id="workspace-description"
                            placeholder="Enter description"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="workspace-type">Workspace Type</label>
                          <select className="form-control" id="workspace-type">
                            <option>Conference Hall</option>
                            <option>Meeting Room</option>
                            <option>Office Space</option>
                            <option>Coworking Space</option>
                            <option>Virtual Office</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="workspace-type">
                            Workspace Facilities
                          </label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            ></input>
                            <label className="form-check-label">WiFi</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            ></input>
                            <label className="form-check-label">Electricity</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            ></input>
                            <label className="form-check-label">Food</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="owner-name">Owner Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="owner-name"
                            placeholder="Enter name"
                          ></input>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Opening Time (WeekDays)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekdays-opening"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Closing Time (WeekDays)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekdays-closing"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Opening Time (Weekend)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekend-opening"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label for="open-time">
                              Closing Time (Weekend)
                            </label>

                            <div
                              className="input-group date"
                              id="timepicker"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                className="form-control datetimepicker-input"
                                data-target="#timepicker"
                                id="weekend-closing"
                              />
                              <div
                                className="input-group-append"
                                data-target="#timepicker"
                                data-toggle="datetimepicker"
                              >
                                <div className="input-group-text">
                                  <i className="far fa-clock"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputFile">Workspace Image</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="workspace-image"
                              ></input>
                              <label
                                className="custom-file-label"
                                for="workspace-image"
                              >
                                Choose file
                              </label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Update Workspace
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="modal-danger">
            <div className="modal-dialog">
              <div className="modal-content bg-danger">
                <div className="modal-header">
                  <h4 className="modal-title">Confirm Delete</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Do you really want to delete this workspace? This action
                    cannot be undone&hellip;
                  </p>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-outline-light">
                    Confirm Delete
                  </button>
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
                    <a
                      href="#"
                      className="btn btn-sm btn-success float-right"
                      data-toggle="modal"
                      data-target="#modal-lg-new"
                    >
                      Add Workspace
                    </a>
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
                          <td>
                            {" "}
                            <div className="text-center">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary"
                                data-toggle="modal"
                                data-target="#modal-lg-edit"
                              >
                                Edit
                              </a>
                              &nbsp;
                              <a
                                href="#"
                                className="btn btn-sm btn-danger"
                                data-toggle="modal"
                                data-target="#modal-danger"
                              >
                                Delete
                              </a>
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
        </section>
      </div>
    </div>
  );
}

export default WorkspacePage;
