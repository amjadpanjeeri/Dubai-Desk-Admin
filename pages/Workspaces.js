import React from "react";
import SideBar from "../components/Layout/SideBar/sidebar";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";

function WorkspacePage({ children }) {
  return (
    <div>
      <TopHeader headerValue="Workspace Management" />
      <section className="content">
        <div className="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Workspaces</h3>
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
                        <th>Workspace Name</th>
                        <th>Owner Name</th>
                        <th>Created Time</th>
                        <th>Workspace Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>183</td>
                        <td>Cyber Park</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>Conference Hall</td>
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

export default WorkspacePage;
