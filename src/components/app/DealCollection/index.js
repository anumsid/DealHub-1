import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getDeals } from '../../../selectors'
import DealCard from '../DealCard'

const DealCollection = props => {
  const cards = props.deals.reverse().map(deal => {
    return <DealCard key={deal.id} card={deal} handleClick={props.handleClick} style={{ width: '30rem' }} />
  })
  return (
    <div className='card-columns mx-auto'>
      <div className='cards'>
        {cards}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  deals: getDeals(state)
})

const mapDispatchToProps = dispatch => ({
  handleClick: (dealId) => dispatch(push(`/deals/${dealId}`))
})

export default connect(mapStateToProps, mapDispatchToProps)(DealCollection)
