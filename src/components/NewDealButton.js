import React from 'react'
import { Button } from 'semantic-ui-react'

class NewDealButton extends React.Component {

  render(){

    return(
      <button secondary="true" className="page-footer new-deal-button">
        Add New Deal
      </button>
    )
  }
}

export default NewDealButton
