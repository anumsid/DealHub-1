import React from 'react'
import { withRouter } from 'react-router-dom'

class Comments extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      comments: []
    }
  }

  componentDidMount(){
    this.fetchComments(this.props.dealId)
    console.log(this.props.dealId);
  }

  fetchComments = (id) => {
    fetch(`http://localhost:3000/api/v1/deals/${id}/comments`)
    .then(res => res.json())
    .then(comments => this.setState({
      comments: comments
    }))
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  comments = () => {
    return this.state.comments.filter(comment =>  {
      return comment.deal_id == this.props.dealId
    })
  }

  mapComments = () => {

    return this.comments.map(comment => {
      return <li key={comment.id}>{comment.content}</li>
    })
  }

  render(){
    console.log(this.state.comments);

    return(
      <div className="comments">
        <form onSubmit = {this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="Add Comment" name="comment"/>
          <label htmlFor="Add Comment"></label>
          <button>Add Comment!</button>
        </form>

        <ul>
          {this.state.comments === [] ? null : this.mapComments}
        </ul>
      </div>
    )
  }
}

export default withRouter(Comments)
