import React from 'react'
import PropTypes from 'prop-types'
import './Silence.css'


const Silence = ({ onClick, number,direction }) => (
  <div onClick={onClick}/>
)

Silence.propTypes = {
  onClick: PropTypes.func.isRequired,
}
export default Silence