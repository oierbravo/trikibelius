import React from 'react'
import PropTypes from 'prop-types'
import './TrikiPadButton.css'
const TrikiPadButton = ({ onClick, number }) => (
  <div
    className="ui-triki-button no-select"
    key={number}
    onClick={onClick}
  //  style={ {
 //     background: completed ? 'line-through' : 'none'
 //   }}
  >
    {number}
  </div>
)
TrikiPadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired
}
export default TrikiPadButton