import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#Modal"
        >
          Tambah Konten
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="Modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Your Data
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title" className="col-form-label">
                      Title:
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      onChange={(e)=>this.props.handleForm(e)}
                      value={this.props.data.title}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="body" className="col-form-label">
                      Body:
                    </label>
                    <textarea
                      rows="7"
                      className="form-control"
                      name="body"
                      onChange={(e)=>this.props.handleForm(e)}
                      value={this.props.data.body}
                    />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={()=>this.props.handleSubmit()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
