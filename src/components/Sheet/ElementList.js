import React from 'react'
import PropTypes from 'prop-types'
import Element from './Element'
import "./ElementList.css"
const ElementList = ({ elements, clickElement }) => (
  <div className="sheet">
    {elements.map((element,index)=>
      <Element
        index={index}
        type={element.type}
        data={element.data}
        selected={element.selected}
        key={index}
        {...element}
        clickElement={() => clickElement(index)}
      />
    )}
  </div>
)
ElementList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      data: PropTypes.object
    }).isRequired
  ).isRequired,
  clickElement: PropTypes.func.isRequired
}
export default ElementList