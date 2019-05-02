import React, { Component, Fragment } from "react";
import Blog from "./Blog";
import Post from "./Post";
import axios from "axios";
import Swal from "sweetalert2";

export default class BlogPost extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      semiPost: {
        id: 1,
        title: "",
        body: "",
        userId: ""
      },
      isUpdate: false
    };
  }

  componentDidMount() {
    this.getBackAPI();
  }

  AlertDelete(data) {
    let id = data.id;
    let title = data.title;
    Swal.fire({
      title: `Are you sure want to delete ${title}?`,
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.RemoveFromAPI(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  postToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.semiPost).then(
      res => {
        console.log(res);
        this.getBackAPI();
        this.setState({
          semiPost: {
            id: 1,
            title: "",
            body: "",
            userId: ""
          }
        })
      },
      err => {
        console.log(err);
      }
    );
  };

  putDataToAPI = () => {
      // let id = data.id
      axios.put(`http://localhost:3004/posts/${this.state.semiPost.id}`,this.state.semiPost).then((res) => {
          console.log(res)
          this.getBackAPI();
          this.setState({
            isUpdate: false,
            semiPost: {
              id: 1,
              title: "",
              body: "",
              userId: ""
            },
          })
      })
  }

  getBackAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then(result => {
        this.setState({
          post: result.data
        });
      });
  };

  RemoveFromAPI = data => {
    axios.delete(`http://localhost:3004/posts/${data}`).then(res => {
      console.log(res);
      this.getBackAPI();
    });
  };

  handleUpdate = (data) => {
    this.setState({
      semiPost: data,
      isUpdate: true
    }, () => {
      // console.log(this.state.semiPost)
    })
  }

  handleForm = (e) => {
    let semiPost = {...this.state.semiPost}
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate){
      semiPost['id'] = timestamp      
    }
    semiPost[e.target.name] = e.target.value
    this.setState({
        semiPost: semiPost
    }, () => {
      // console.log(this.state.semiPost)
    })
  }

  handleSubmit = () => {
    if(this.state.isUpdate){
      this.putDataToAPI();
    } else {
      this.postToAPI();
    }
  }

  render() {
    return (
      <Fragment>
        <h3 className="mt-3 text-center">This Blog</h3>
        <div className="container">
          <Post 
            data={this.state.semiPost}
            handleForm={(e)=>this.handleForm(e)}
            handleSubmit={()=>this.handleSubmit()}
          />
        </div>
        <hr />
        {this.state.post.map(post => {
          return (
            <Blog
              key={post.id}
              data={post}
              remove={data => this.RemoveFromAPI(data)}
              willDelete={data => this.AlertDelete(data)}
              WillEdit={data => this.handleUpdate(data)}
            />
          );
        })}
      </Fragment>
    );
  }
}
