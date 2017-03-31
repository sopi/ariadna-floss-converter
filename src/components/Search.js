import React, { Component } from 'react'
const initialState = { term: '' }

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = initialState
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.onSubmitHandle(this.state.term)
  }

  onFormSubmit = this.onFormSubmit.bind(this)

  searchTermChange (e) {
    this.setState({ term: e.target.value })
  }

  searchTermChange = this.searchTermChange.bind(this)

  render () {
    return (
      <form className='search' onSubmit={this.onFormSubmit}>
        <input value={this.state.term} onChange={this.searchTermChange} />
      </form>
    )
  }
}

const { func, string } = React.PropTypes
Search.propTypes = {
  term: string,
  onSubmitHandle: func.isRequired
}

export default Search
