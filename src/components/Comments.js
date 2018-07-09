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

  render(){

    return(
      <form>
        <input type="text" placeholder="Add Comment" value=""/>
        <label htmlFor="Add Comment">Add Comment</label>
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
