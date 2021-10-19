import React from "react";
import SideBar from "../components/Layout/SideBar/sidebar";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";

function RegisteredUsers({ children }) {
  return (
    <div>
      <TopHeader headerValue="Registered Users" />
      <section className="content">
        <div className="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Registered Users</h3>
                  <div class="card-tools">
                    <div
                      class="input-group input-group-sm"
                      style={{ width: "150px" }}
                    ></div>
                  </div>
                </div>
                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap">
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
                          <span class="tag tag-success">Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>219</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td>
                          <span class="tag tag-warning">Pending</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>657</td>
                        <td>Bob Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span class="tag tag-primary">Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>175</td>
                        <td>Mike Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span class="tag tag-danger">Denied</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
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
  );
}

export default RegisteredUsers;
