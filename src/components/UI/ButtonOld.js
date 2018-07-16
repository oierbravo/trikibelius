import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({name,active,label ,clickButton }) => (
  <div className={['button','button-' + name.toLowerCase(),(active) ? 'active' : ''].join(' ')}  onClick={() => clickButton()}>
    {label}
  </div>
)
Button.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired
}
export default Button