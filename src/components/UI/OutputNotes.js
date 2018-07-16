import React from 'react'
import PropTypes from 'prop-types'

import {TrikiNumbers} from '../../maps/Triki'
import {
  ElementTypes
} from '../../actions'

class OutputNotes extends React.Component {
  generateOutput() {
    var outputArray = this.props.elements.map(function(element,index){
      switch(element.type){
        case ElementTypes.NOTE:
        console.log(TrikiNumbers);
          return TrikiNumbers.getNote(element.data.number,element.data.direction);
        case ElementTypes.LINEBREAK:
          return "#";
        case ElementTypes.SILENCE:
          return "_";
        default:
          return '';
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