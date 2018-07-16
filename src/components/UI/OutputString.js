import React from 'react'
import PropTypes from 'prop-types'

import {ElementTypes} from "../../actions"
//const OutputString =  ({elements}) => (
//  <textarea disabled value={ ({elements})}/>
//)

class OutputString extends React.Component {
  constructor(props) {
    super(props);

    this.output = '';

  }
  generateOutput() {
    var outputArray = this.props.elements.map(function(element,index){
      switch(element.type){
        case ElementTypes.NOTE:
          return ((element.data.direction === 'OPEN') ? '+' : '') + element.data.number;
        case ElementTypes.LINEBREAK:
          return "#";
        case ElementTypes.SILENCE:
          return "_";
      }
    });
    return outputArray.join(',');
  }
  render () {

    return (
      <textarea disabled value={this.generateOutput()}/>
    );
  }
}


OutputString.propTypes = {
  elements: PropTypes.array.isRequired
}
export default OutputString