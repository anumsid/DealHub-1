import React from 'react'
import { connect } from 'react-redux'
import { Label, Button } from 'semantic-ui-react'
import { getAuthToken } from '../../../selectors'
import { upVote } from '../../../actions'

const Votes = ({ votes, auth, dealId, onClick }) => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Label color='pink' style={{ display: 'inline-block' }}><i aria-hidden className='like icon' />{votes ? votes.length : 0}</Label>
      {
        auth && <Button onClick={() => { onClick({ deal_id: dealId }) }} color='pink'>UpVote this Deal</Button>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  auth: getAuthToken(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: vote => dispatch(upVote(vote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Votes)
