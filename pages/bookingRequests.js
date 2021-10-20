import React from "react";
import SideBar from "../components/Layout/SideBar/sidebar";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";

function BookingRequests({ children }) {
  return (
    <div>
      <TopHeader headerValue="Booking Requests" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Booking Requests</h3>
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
                        <td> <div class="text-center">
                <a href="#" class="btn btn-sm btn-primary">Edit</a>
                &nbsp;
                <a href="#" class="btn btn-sm btn-danger">Delete</a>
              </div></td>
                      
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
  );
}

export default BookingRequests;
