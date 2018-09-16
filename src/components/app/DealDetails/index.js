import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Comments from '../../core/Comments'
import Votes from '../../core/Votes'
import DealCardItem from '../../core/DealCardItem'
import { getDealDetails, getUserData } from '../../../selectors'

const DealCardDetails = ({ card, users, ...props }) => (
  <React.Fragment>
    <div className='card mx-auto' style={{ width: '30rem', marginBottom: 15 }}>
      <DealCardItem card={card} />
    </div>
    <div style={{ margin: '0 auto', width: '30rem' }}>
      <Votes votes={card.votes} dealId={card.id} />
    </div>
    <div style={{ textAlign: 'left', margin: '30px auto', width: '30rem' }}>
      <Comments comments={card.comments} users={users} dealId={card.id} />
    </div>
  </React.Fragment>
)

const mapStateToProps = state => ({
  card: getDealDetails(state),
  users: getUserData(state)
})

export default withRouter(connect(mapStateToProps)(DealCardDetails))
