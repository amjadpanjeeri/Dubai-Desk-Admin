import React from "react";
// import SideBar from "../components/Layout/SideBar/sidebar";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";
import Header from "../components/Layout/Header/header";
import SideBar from "../components/Layout/SideBar/sidebar";
import { collection, getFirestore, getDocs } from "firebase/firestore";

function RegisteredUsers({ children }) {
  $('#reservationdate').datetimepicker({
    format: 'L'
});
  return (
    <div>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <TopHeader headerValue="Registered Users" />

        <div class="modal fade" id="modal-danger">
            <div class="modal-dialog">
              <div class="modal-content bg-danger">
                <div class="modal-header">
                  <h4 class="modal-title">Confirm Delete</h4>
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
                    Do you really want to delete this user account? This action
                    cannot be undone&hellip;
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
                    Confirm Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

        <div class="modal fade" id="modal-lg-edit">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Edit User</h4>
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
                  <div class="card card-primary">
                    <form>
                      <div class="card-body">
                        <div class="form-group">
                          <label for="user-name">User Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="user-name"
                            placeholder="Enter User name"
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="user-email">
                            User Email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="user-email"
                            placeholder="Enter User email"
                          ></input>
                        </div>
                        <div class="form-group">
                  <label>Date Of Birth</label>
                    <div class="input-group date" id="reservationdate" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                        <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                        </div>
                    </div>
                   </div>
                        <div class="form-group">
                          <label for="user-phone">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="user-dob"
                            placeholder="Enter Phone Number"
                          ></input>
                        </div>
                       
                        
                      </div>
                    </form>
                  </div>
                </div>
                <div class="modal-footer justify-content-between">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-success">
                    Update User
                  </button>
                </div>
              </div>
            </div>
          </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
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
                        {users.forEach((user) => {
                          console.log(user["name"]);
                          return (
                            <tr key={user}>
                              <td>{user["name"]}</td>
                              <td>{user["email"]}</td>
                              <td>{user["dob"]}</td>
                              <td>{user["phone"]}</td>
                              <td>{user["createdTime"]}</td>
                              <td>{user["loginMethod"]}</td>
                              <td>
                                <div className="text-center">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-primary"
                                  >
                                    Edit
                                  </a>
                                  &nbsp;
                                  <a href="#" className="btn btn-sm btn-danger">
                                    Delete
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
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

RegisteredUsers.getInitialProps = async (ctx) => {
  try {
    // console.log(app);
    const firestore = getFirestore();
    const querySnapshot = await getDocs(collection(firestore, "users"));
    // console.log(querySnapshot.docs.length);
    var users = [];
    querySnapshot.forEach((doc) => {
      users.push({
        name: doc.data().name,
        email: doc.data().email,
        dob: doc.data().dob,
        phone: doc.data().phone,
        createdTime: doc.data().createdTime,
        loginMethod: doc.data().loginMethod,
      });
      // console.log(`${doc.id} => ${doc.data()["name"]}`);
    });
    // console.log(users);
    // firebase
    //   .firestore()
    //   .collection("users")
    //   .onSnapshot(function (doc) {
    //     console.log(doc.data());
    //   });
    // const querySnapshot = await getDocs(collection(db, "workspace"));
    // console.log(querySnapshot.docs.length);
  } catch (e) {
    // Deal with the fact the chain failed
    console.log(e);
  }
  return { users: users };
};

export default RegisteredUsers;
