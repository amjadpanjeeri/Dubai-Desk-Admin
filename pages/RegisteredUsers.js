import React from "react";
// import SideBar from "../components/Layout/SideBar/sidebar";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";
import Header from "../components/Layout/Header/header";
import SideBar from "../components/Layout/SideBar/sidebar";
import { collection, getFirestore, getDocs } from "firebase/firestore";

function RegisteredUsers({ children, users }) {
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
