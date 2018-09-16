import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { addDeal } from '../../../actions'

class CreateDealForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleTitle = (e) => {
    // console.log(e.target.value);
    this.setState({
      title: e.target.value
    })
  }

  handleLocation = (e) => {
    // console.log(e.target.value);
    this.setState({
      location: e.target.value
    })
  }

  handleExpiration = (e) => {
    // console.log(e.target.value);
    this.setState({
      expiration_date: e.target.value
    })
  }

  handleDescription = (e) => {
    // console.log(e.target.value);
    this.setState({
      description: e.target.value
    })
  }

  handleCategory = (e) => {
    this.setState({
      category: e.target.innerText
    })
  }

  handleImage = (e) => {
    // console.log(e.target.value);
    this.setState({
      image: e.target.value
    })
  }

  render() {
  const options = [
    { key: 'food', text: 'Food', value: 'food' },
    { key: 'beverages', text: 'Beverages', value: 'beverages' },
    { key: 'groceries', text: 'Groceries', value: 'groceries' },
    { key: 'technology', text: 'Technology', value: 'technology' },
    { key: 'electronics', text: 'Electronics', value: 'electronics' },
    { key: 'apparel', text: 'Apparel', value: 'apparel' },
    { key: 'auto', text: 'Auto', value: 'auto' },
    { key: 'home', text : 'Home', value: 'home' },
    { key: 'sports & outdoors', text : 'Sports & Outdoors', value: 'sports & outdoors' },
    { key: 'pet supplies', text : 'Pet Supplies', value: 'pet supplies' }
  ]

    return (
      <div className="createNewDeal">
        {
          this.props.status && (
            <div class='ui positive message'>
              <div class='header'>Upload Success!</div>
              <p>
                Deal Successfully Uploaded!
              </p>
            </div>
          )
        }
        <br />
        <h3>Add New Deal</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form style={{width: '40rem'}} className="mx-auto large">

            <Form.Input fluid label="title" placeholder="title" name="title" onChange={this.handleTitle}/>

            <Form.Input fluid label="location" placeholder="location" name="location" onChange={this.handleLocation}/>

            <Form.TextArea fluid label='description'  placeholder='describe this deal' onChange={this.handleDescription}/>

            <Form.Input fluid type="date" value={this.state.expiration_date} label="expiration" placeholder="expiration" name="expiration" onChange={this.handleExpiration}/>

            <Form.Select fluid label='Categories' options={options} placeholder='Select Category' onChange={this.handleCategory}/>

            <Form.Input fluid label="image [OPTIONAL]" placeholder="url" name="image" onChange={this.handleImage}/>

          </Form>
          <br />
          <Form.Button onClick={() => { this.props.onClick(this.state) }}>Submit Deal</Form.Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status: state.deals.status
})

const mapDispatchToProps = dispatch => ({
  onClick: deal => dispatch(addDeal(deal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateDealForm))
