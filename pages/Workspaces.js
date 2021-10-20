import React from "react";
import TopHeader from "../components/Layout/TopHeader/topHeader";
import Dashboard from "../components/Layout/Dashboard/dashboard";
import Footer from "../components/Layout/Footer/footer";
import Header from "../components/Layout/Header/header";
import {
  collection,
  getFirestore,
  getDocs,
  setDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import SideBar from "../components/Layout/SideBar/sidebar";
import app from "../firebase/clientApp";
import "firebase/firestore";
import { useState } from "react";
import firebase from "firebase/app";

let editingWorkspace = {
  addedBy: "",
  additionalFacilities: [""],
  address: "",
  description: "",
  lastUpdated: {},
  name: "",
  ownerId: "",
  photoUrl: "",
  time: {},
  workspaceType: "",
};

function WorkspacePage({ children, workspaces }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  // const [facilities, setFacilities] = useState("");
  const [owner, setOwner] = useState("");
  // const [weekDayStart, setWeekDayStart] = useState("");
  // const [weekDayEnd, setWeekDayEnd] = useState("");
  // const [weekendStart, setWeekEndStart] = useState("");
  // const [weekendEnd, setWeekEndEnd] = useState("");
  // const [image, setImage] = useState("");

  const handleAddWorkspace = async (e) => {
    e.preventDefault();
    const docData = {
      name: "Hello world!",
      address: "Address",
      description: "description",
      createdTime: Timestamp.fromDate(new Date("December 10, 1815")),
      facilities: ["Water", "Reception", "Food"],
      ownerId: "scgkvhjbnkj",
      objectExample: {
        "mo-from": "9:00",
        "mo-to": "5:00",
        "fr-from": "12:00",
        "fr-to": "6:00",
      },
    };
    try {
      const firestore = getFirestore();
      await setDoc(collection(firestore, "workspace"), docData);
      const querySnapshot = await getDocs(collection(firestore, "workspace"));
      var workspaces = [];
    } catch (e) {
      console.log(e);
    }
  };

  const editWorkspace = (workspace) => {
    editingWorkspace = workspace;
    console.log(editingWorkspace);
  };
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

                    <form onSubmit={(e) => handleAddWorkspace(e)} method="post">
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="workspace-name">Workspace Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="workspace-name"
                            placeholder="Enter Workspace name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group">
                          <label htmlFor="workspace-address">
                            Workspace Address
                          </label>
                          <textarea
                            className="form-control"
                            rows="2"
                            id="workspace-address"
                            placeholder="Enter address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="workspace-description">
                            Workspace Description
                          </label>
                          <textarea
                            className="form-control"
                            rows="4"
                            id="workspace-description"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="workspace-type">Workspace Type</label>
                          <select className="form-control" id="workspace-type">
                            <option>Conference Hall</option>
                            <option>Meeting Room</option>
                            <option>Office Space</option>
                            <option>Coworking Space</option>
                            <option>Virtual Office</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="workspace-type">
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
                            <label className="form-check-label">
                              Electricity
                            </label>
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
                          <label htmlFor="owner-name">Owner Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="owner-name"
                            placeholder="Enter name"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                          ></input>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label htmlFor="open-time">
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
                            <label htmlFor="open-time">
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
                            <label htmlFor="open-time">
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
                            <label htmlFor="open-time">
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
                          <label htmlFor="exampleInputFile">
                            Workspace Image
                          </label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="workspace-image"
                              ></input>
                              <label
                                className="custom-file-label"
                                htmlFor="workspace-image"
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
                      <div className="modal-footer justify-content-between">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-success">
                          Create New Workspace
                        </button>
                      </div>
                    </form>
                  </div>
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
                          <label htmlFor="workspace-name">Workspace Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="workspace-name"
                            value={editingWorkspace.name}
                            placeholder="Enter Workspace name"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label htmlFor="workspace-address">
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
                          <label htmlFor="workspace-description">
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
                          <label htmlFor="workspace-type">Workspace Type</label>
                          <select className="form-control" id="workspace-type">
                            <option>Conference Hall</option>
                            <option>Meeting Room</option>
                            <option>Office Space</option>
                            <option>Coworking Space</option>
                            <option>Virtual Office</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="workspace-type">
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
                            <label className="form-check-label">
                              Electricity
                            </label>
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
                          <label htmlFor="owner-name">Owner Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="owner-name"
                            placeholder="Enter name"
                          ></input>
                        </div>
                        <div className="bootstrap-timepicker">
                          <div className="form-group">
                            <label htmlFor="open-time">
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
                            <label htmlFor="open-time">
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
                            <label htmlFor="open-time">
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
                            <label htmlFor="open-time">
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
                          <label htmlFor="exampleInputFile">
                            Workspace Image
                          </label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="workspace-image"
                              ></input>
                              <label
                                className="custom-file-label"
                                htmlFor="workspace-image"
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
                        {workspaces.map((workspace) => {
                          return (
                            <tr key={workspace}>
                              <td>{workspace.name}</td>
                              <td>{workspace.address}</td>
                              <td>{workspace.description}</td>
                              <td>{workspace.ownerId}</td>
                              <td>
                                {workspace.time["fr-from"]} to{" "}
                                {workspace.time["fr-to"]}
                              </td>
                              <td>
                                {workspace.time["mo-from"]} to{" "}
                                {workspace.time["mo-to"]}
                              </td>
                              <td>{workspace.workspaceType}</td>
                              <td>
                                {" "}
                                <div className="text-center">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-primary"
                                    data-toggle="modal"
                                    data-target="#modal-lg-edit"
                                    onClick={() => editWorkspace(workspace)}
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
                          );
                        })}
                        <tr></tr>
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

WorkspacePage.getInitialProps = async (ctx) => {
  try {
    // console.log(app);
    const firestore = getFirestore();
    const querySnapshot = await getDocs(collection(firestore, "workspace"));
    // console.log(querySnapshot.docs.length);
    var workspaces = [];
    querySnapshot.forEach((doc) => {
      workspaces.push(doc.data());
      // console.log(`${doc.id} => ${doc.data()["name"]}`);
    });
    // console.log(workspaces);
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
  return { workspaces: workspaces };
};

export default WorkspacePage;
