import React from 'react'
import { connect } from 'react-redux'
import { onAddComment } from '../../../actions'
import { getAuthToken } from '../../../selectors'

const MapComments = ({ comments, users }) => {
  return comments && users ? comments.map(comment => {
    return (
      <div className='item' key={comment.id}>
        <div className='content'>
          <span className='header'>{users.filter(user => user.id === comment.user_id)[0].name}:</span>
          <div className='description'>
            {comment.content}
          </div>
        </div>
      </div>
    )
  }) : null
}

class Comments extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='comments'>
        {
          this.props.authToken && (
            <form onSubmit={e => { e.preventDefault(); this.props.onClick({ ...this.state, deal_id: this.props.dealId }) }} style={{ textAlign: 'center' }}>
              <input onChange={this.handleChange} type='text' placeholder='Add Comment' name='content' />
              <label htmlFor='Add Comment' />
              <button>Add Comment!</button>
            </form>
          )
        }
        <div className='ui divided middle aligned list'>
          {<MapComments comments={this.props.comments} users={this.props.users} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status: state.deals.commentStatus,
  authToken: getAuthToken(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: comment => dispatch(onAddComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
