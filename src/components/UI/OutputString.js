import React from 'react'
import PropTypes from 'prop-types'

import {ElementTypes,Directions,GROUP_LEFT} from "../../actions"
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
          return ((element.data.group === GROUP_LEFT) ? '-' : '') + ((element.data.direction === Directions.OPEN) ? '+' : '') + element.data.number;
        case ElementTypes.LINEBREAK:
          return "#";
        case ElementTypes.SILENCE:
          return "_";
        default:
          return ';'
      }
    });
    let outputString =  outputArray.join(',');
    return  outputString.replace(/,-/g,'-');
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