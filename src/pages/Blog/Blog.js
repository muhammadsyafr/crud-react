import React, { Component } from "react"
class Blog extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://placeimg.com/640/480/tech"
              alt={"cap"}
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontFamily: '"Ubuntu", sans-serif', color: "#fd5f00" }}
              >
                {this.props.data.title}
              </h5>
              <table className="table-responsive mt-3">
                <thead />
                <tbody>
                  <tr>
                    <td>{this.props.data.body}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-success"
                data-toggle="modal"
                data-target="#Modal"
                onClick={() => this.props.WillEdit(this.props.data)}
              >
                Edit
              </button>
              &nbsp;
              <button
                className="btn btn-danger"
                onClick={() => this.props.willDelete(this.props.data)}
              >
                Remove
              </button>
            </div>

            <div className="card-footer text-center">
              <small className="text-muted"> Posted at 24/02/2019</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
