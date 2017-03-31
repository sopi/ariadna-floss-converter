import React from 'react'
import '../styles/flossSprite.css'

const NEW_FLOSS_NUMBERING_START = 1500

const Floss = (props) => {
  const flossStyleNumber = parseInt(props.numberDefinition.new, 10) - NEW_FLOSS_NUMBERING_START
  return (
    <div>
      <div className={`floss_bg floss_bg--number_${flossStyleNumber}`} />
      <div className='dscription'>
        <span>New: {props.numberDefinition.new}, Old: {props.numberDefinition.old}</span>
      </div>
    </div>
  )
}

const { shape, string } = React.PropTypes

Floss.propTypes = {
  numberDefinition: shape({
    new: string,
    old: string
  })
}

export default Floss
