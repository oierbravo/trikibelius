import React from 'react'
import PropTypes from 'prop-types'
import "./Note.css"
const Note = ({ onClick,data,active }) => (
  <div className={['note','note-' + data.direction.toLowerCase(),(active) ? 'active' : ''].join(' ')} onClick={onClick} >
    {data.number}
  </div>
)
Note.propTypes = {
  onClick: PropTypes.func,
  data:PropTypes.object.isRequired,
  active:PropTypes.bool
}
export default Note