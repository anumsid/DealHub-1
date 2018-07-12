import React from 'react'

const SearchDeals = (props) => {
  console.log(props);
  // console.log(props.handleSearch);
  return (
    <div className="searchInput ui small fluid icon input" style={{width: '15rem'}}>
      <input
        type="text"
        // value={props.handleSearch}
        placeholder={"Search deals"}
      onChange={props.onChange}
    />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default SearchDeals
