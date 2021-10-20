import React from 'react';

function edit_workspace_model(props) {
    return (
        <div>

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

        </div>
    );
}

export default edit_workspace_model;