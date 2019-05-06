import React, { Component } from 'react'
import axios from "axios";

export default class DetailPostBlog extends Component {
  state = {
      post: {
          title:'',
          body:''
      }
  }
  componentDidMount(){
    // console.log(this.props.match.params.BlogId)
    axios.get(`http://localhost:3004/posts/${this.props.match.params.BlogId}`).then((res) => {
        console.log(res)
        let post = res.data
        this.setState({
            post: {
                title: post.title,
                body: post.body
            }
        })
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}
