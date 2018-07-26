import React from 'react'
import PropTypes from 'prop-types'
import './Silence.css'


const Silence = ({ onClick}) => (
    <div  onClick={onClick}>&zwnj;</div>
)

Silence.propTypes = {
  onClick: PropTypes.func.isRequired,
}
export default Silence