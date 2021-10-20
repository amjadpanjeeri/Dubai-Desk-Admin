import React from "react";
import SideBar from "../components/Layout/SideBar/sidebar";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Header from "../components/Layout/Header/header";

function BookingRequests({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <TopHeader headerValue="Booking Requests" />
        <div class="modal fade" id="modal-success">
          <div class="modal-dialog">
            <div class="modal-content bg-success">
              <div class="modal-header">
                <h4 class="modal-title">Confirm Approval</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>
                  Do you really want to confirm this booking request? &hellip;
                </p>
              </div>
              <div class="modal-footer justify-content-between">
                <button
                  type="button"
                  class="btn btn-outline-light"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-outline-light">
                  Confirm Approve
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="modal-danger">
          <div class="modal-dialog">
            <div class="modal-content bg-danger">
              <div class="modal-header">
                <h4 class="modal-title">Confirm Reject</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Do you really want to reject this request? &hellip;</p>
              </div>
              <div class="modal-footer justify-content-between">
                <button
                  type="button"
                  class="btn btn-outline-light"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-outline-light">
                  Confirm Decline
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>User Name</th>
                        <th>Workspace Name</th>
                        <th>Workspace Type</th>
                        <th>Specification</th>
                        <th>Facilities</th>
                        <th>Additional Facilities</th>
                        <th>Special Requests</th>
                        <th>Status</th>
                        <th>isSingleDay</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>From Time</th>
                        <th>To Time</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Hari</td>
                        <td>Cyber Park</td>
                        <td>Office Space</td>
                        <td>Business Meeting</td>
                        <td>Wifi</td>
                        <td></td>
                        <td></td>
                        <td>
                          <span className="tag tag-success">Approved</span>
                        </td>
                        <td>Yes</td>
                        <td>18/10/2021</td>
                        <td>18/10/2021</td>
                        <td>9:51 PM</td>
                        <td>11:52 PM</td>
                        <td>
                          {" "}
                          <div class="text-center">
                            <a
                              href="#"
                              class="btn btn-sm btn-success"
                              data-toggle="modal"
                              data-target="#modal-success"
                            >
                              Approve Request
                            </a>
                            &nbsp;
                            <a
                              href="#"
                              class="btn btn-sm btn-danger"
                              data-toggle="modal"
                              data-target="#modal-danger"
                            >
                              Reject Request
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
        </section>
      </div>
    </div>
  );
}

export default BookingRequests;
