import React from 'react'
import PropTypes from 'prop-types'
import OutputString from './OutputString'
import OutputNotes from './OutputNotes'

const OutputContainer = ({elements}) => (
  <div className="output">
    <OutputString elements={elements}/>
    <OutputNotes elements={elements}/>
    </div>
)
OutputContainer.propTypes = {
  elements: PropTypes.array.isRequired
}
export default OutputContainer