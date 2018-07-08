import React from 'react'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class SearchDeals extends React.Component {

  constructor(){
    super()
    this.state = {
      deals: [],
      isLoading: false,
      value: ""
    }
  }

  resetComponent = () => this.setState({ isLoading: false, pokemons: [], value: '' })

  handleResultSelect = (e, { deal }) => this.setState({ value: deal.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = deal => re.test(deal.title)

      this.setState({
        isLoading: false,
        pokemons: _.filter(this.state.pokemons, isMatch),
      })
    }, 300)
  }

  render(){
    const { deals, isLoading, value } = this.state

    return(
      <div>
        <Search
          category
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            showNoResults={false}
            value={value}
            {...this.props}/>
      </div>
    )
  }
}

export default SearchDeals
