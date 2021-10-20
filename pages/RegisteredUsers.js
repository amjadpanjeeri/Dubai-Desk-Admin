import React from "react";
// import SideBar from "../components/Layout/SideBar/sidebar";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";
import Header from "../components/Layout/Header/header";
import SideBar from "../components/Layout/SideBar/sidebar";

function RegisteredUsers({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <TopHeader headerValue="Registered Users" />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card-body table-responsive p-0">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Date Of Birth</th>
                        <th>Phone</th>
                        <th>Created Time</th>
                        <th>Login Methord</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John Doe</td>
                        <td>a@gmail.com</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className="tag tag-success">Approved</span>
                        </td>
                        <td>19/10/2021</td>
                        <td>GoogleSignIn</td>
                        <td>
                          {" "}
                          <div class="text-center">
                            <a href="#" class="btn btn-sm btn-primary">
                              Edit
                            </a>
                            &nbsp;
                            <a href="#" class="btn btn-sm btn-danger">
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
        </section>
      </div>
    </div>
  );
}

export default RegisteredUsers;
