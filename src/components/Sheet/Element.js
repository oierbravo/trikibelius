import React from 'react'
import PropTypes from 'prop-types'
import { ElementTypes } from '../../actions'
import Note from './Note'
import Silence from './Silence'
import LineBreak from './LineBreak'
import './Element.css'

class Element extends React.Component {
    // …
    renderElement() {
        switch (this.props.type) {
            case ElementTypes.NOTE:
              return (
                <Note data={this.props.data} onClick={ this.props.clickElement}/>
              )
            case ElementTypes.SILENCE:
              return (
                <Silence  onClick={ this.props.clickElement}/>
              )
            case ElementTypes.LINEBREAK:
              return (
                <LineBreak onClick={ this.props.clickElement}/>
              )
            default:
              throw new Error('Unknown type: ' + this.props.type)
          }
    }  
    render () {
      return (
        <div index={this.props.index} className={["sheet-element no-select","sheet-element-" + this.props.type.toLowerCase(),(this.props.selected === true) ? 'selected' : ''].join(' ')}>
          {this.renderElement()}
        </div>
      );
    }
  }


Element.propTypes = {
  clickElement: PropTypes.func,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  selected:PropTypes.bool,
  index:PropTypes.number.isRequired
}
export default Element