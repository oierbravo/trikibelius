import React from 'react'
import PropTypes from 'prop-types'

import {BbEb} from '../../maps/Numbers'
import {
  Directions,
  ElementTypes
} from '../../actions'

class OutputNotes extends React.Component {
  constructor(props) {
    super(props);
  }
  generateOutput() {
    var outputArray = this.props.elements.map(function(element,index){
      switch(element.type){
        case ElementTypes.NOTE:
          return BbEb.getNote(element.data.number,element.data.direction);
        case ElementTypes.LINEBREAK:
          return "#";
        case ElementTypes.SILENCE:
          return "_";
      }
    });
    return outputArray.join(' ');
  }
  render () {

    return (
      <textarea disabled value={this.generateOutput()}/>
    );
  }
}


OutputNotes.propTypes = {
  elements: PropTypes.array.isRequired
}
export default OutputNotes