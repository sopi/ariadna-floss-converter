import React, { Component } from 'react'
import Search from './Search'
import { mapFlossNumbering } from './MapFlossNumbering'
import Floss from './Floss'

const initialState = {
  searchTerm: ''
}

export default class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = initialState
  }

  onSearchTermSubmit (searchTerm) {
    this.setState({
      searchTerm
    })
  }

  onSearchTermSubmit = this.onSearchTermSubmit.bind(this)

  render () {
    const Flosses = mapFlossNumbering(Floss, this.state.searchTerm)
    return (
      <div className='class-name'>
        <Search onSubmitHandle={this.onSearchTermSubmit} />
        <div className='searchResult'>
          <Flosses />
        </div>
      </div>
    )
  }
}
