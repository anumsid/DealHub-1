import React from 'react'
import { Form } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class CreateDealForm extends React.Component {
    constructor() {
    super()

    this.state = {
      title: '',
      location: '',
      expiration_date: '',
      category: '',
      description: '',
      image: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newDeal = {
      title: this.state.title,
      location: this.state.location,
      expiration_date: this.state.expiration_date,
      category: this.state.category,
      description: this.state.description,
      image: this.state.image
      }

      // console.log(newDeal);

    fetch(`http://localhost:3000/api/v1/deals`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(newDeal),
    })
      .then(resp => resp.json())
      .then(deal => {
        this.props.createDeal(deal)
        this.props.history.push('/')
      })

       e.target.reset()
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
    // debugger;
    console.log(e.target.innerText);
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

  render(){
    console.log(this.props);
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

    return(
      <div className="createNewDeal">
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
          <Form.Button>Submit Deal</Form.Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateDealForm)
