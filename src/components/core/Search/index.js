import React from 'react'
import { connect } from 'react-redux'
import { filterDeals } from '../../../actions'

class SearchDeals extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.state = {}
  }

  onChange (e) {
    const value = e.target.value
    this.setState({ value })
  }

  onEnter (e) {
    if (e.keyCode === 13) {
      this.props.onClick(this.state.value)
    }
  }

  render () {
    return (
      <div className='searchInput ui small fluid icon input' style={{width: '15rem'}}>
        <input
          type='text'
          value={this.state.value}
          placeholder={'Search deals'}
          onChange={this.onChange}
          onKeyDown={this.onEnter}
        />
        <i className='circular search link icon' onClick={() => { this.props.onClick(this.state.value) }} />
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  onClick: value => dispatch(filterDeals(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchDeals)
