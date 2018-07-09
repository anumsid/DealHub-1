import React from 'react'

class Comments extends React.Component {
  constructor(props){
    super(props)

    state = {
      comments: []
    }
  }

  fetchComments = () => {
    fetch(`http://localhost:3000/api/v1/comments`)
    .then(res => res.json())
    .then(comments => this.setState({
      comments
    }))
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = () => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render(){

    return(
      <form onSubmit = {this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="Add Comment" name="comment"/>
        <label htmlFor="Add Comment">Add Comment</label>
        <button>Add Comment!</button>
      </form>

      <ul>
        {this.state.comments.map(comment => {
          return <li key={comment.id}>{comment}</li>
        })}

      </ul>
    )
  }
}

export default Comments
