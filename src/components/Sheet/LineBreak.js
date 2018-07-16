import React from 'react'
import PropTypes from 'prop-types'
import './LineBreak.css'

const LineBreak = ({ onClick }) => (
  <div className="sheet-linebreak"onClick={onClick}/>
)

LineBreak.propTypes = {
  onClick: PropTypes.func.isRequired,
}
export default LineBreak