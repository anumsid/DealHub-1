import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button } from 'semantic-ui-react'

export const NewDealButton = props => (
  <Button secondary className='new-deal-button' onClick={props.onClick}>
    Add New Deal
  </Button>
)

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(push('/add'))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDealButton)
