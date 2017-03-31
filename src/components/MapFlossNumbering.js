import React, { Component } from 'react'

import mappingDefinition from '../data/muliny.json'

export function mapFlossNumbering (WrappedComponent, searchTerm) {
  const oldNewMapping = mappingDefinition.reduce((mapping, curMap) => {
    return { ...mapping, [curMap.old]: curMap }
  }, {})

  const newOldMapping = mappingDefinition.reduce((mapping, curMap) => {
    return { ...mapping, [curMap.new]: curMap }
  }, {})

  const searchedFlosses = searchTerm.split(/[\s,;]+/).map((floss) => parseInt(floss.trim(), 10))

  const newNumberingFromOldDef =
    searchedFlosses
      .filter((floss) => floss < 1500)
      .map((floss) => oldNewMapping[floss])

  const newNumberingDef =
    searchedFlosses
      .filter((floss) => floss >= 1500)
      .map((floss) => newOldMapping[floss])

  const flossNubersToDisplay = [...newNumberingFromOldDef, ...newNumberingDef]

  return class extends Component {
    render () {
      if (!flossNubersToDisplay.length) return <div />
      const flosses = flossNubersToDisplay.map((flossDef) => (
        <WrappedComponent key={flossDef.new} numberDefinition={flossDef} {...this.props} />
      ))
      return (
        <div>
          {flosses}
        </div>
      )
    }
  }
}
