import React from "react";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Header from '../components/Layout/Header/header'
import SideBar from '../components/Layout/SideBar/sidebar'


function Saleshistory({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <TopHeader headerValue="Sales History" />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Sales History</h3>
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
                          <th>ID</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Created Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>183</td>
                          <td>John Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-success">Approved</span>
                          </td>
                          <td>Bacon ipsum.</td>
                        </tr>
                        <tr>
                          <td>219</td>
                          <td>Alexander Pierce</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-warning">Pending</span>
                          </td>
                          <td>Bacon ipsum.</td>
                        </tr>
                        <tr>
                          <td>657</td>
                          <td>Bob Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-primary">Approved</span>
                          </td>
                          <td>Bacon ipsum.</td>
                        </tr>
                        <tr>
                          <td>175</td>
                          <td>Mike Doe</td>
                          <td>11-7-2014</td>
                          <td>
                            <span className="tag tag-danger">Denied</span>
                          </td>
                          <td>Bacon ipsum.</td>
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

export default Saleshistory;
