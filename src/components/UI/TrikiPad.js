import React from 'react'
import PropTypes from 'prop-types'
import TrikiPadButton from './TrikiPadButton'

import TrikiNumbers from '../../maps/Triki'
import {TrikiKeyboard} from '../../maps/Keyboard'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './TrikiPad.css';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess'; 
import TrikiUpIcon from './icons/TrikiUpIcon'

import TrikiButtons from './icons/svg/triki-buttons.svg'
const buttons = TrikiNumbers.getMap().reverse();
class TrikiPad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible:false
    }
  }
  toggleVisibility () {
    this.setState({visible:!this.state.visible});
  }
  render () { return (
      <div className={["ui-triki-pad", "ui-triki-pad--" + ((this.state.visible)? 'visible':'hidden')].join(' ')}>
        <div className="ui-triki-pad-content">
          <div className="ui-triki-pad-flex ui-triki-pad-flex--pares">
          { 
            
            buttons.filter((el) =>(el.Number%2) === 0).map((element,index) =>
                <TrikiPadButton         
                  key={index}
                  number={element.Number}
                  {...element}
                  onClick={() => this.props.clickButton(element.Number,this.props.currentDirection)}
                />)
          }
          </div>
          <div className="ui-triki-pad-flex ui-triki-pad-flex--impares" >
            { 
                buttons.filter((el) =>el.Number%2).map((element,index) =>
                  <TrikiPadButton         
                    key={index}
                    number={element.Number}
                    {...element}
                    onClick={() => this.props.clickButton(element.Number,this.props.currentDirection)}
                  />)
            }
          </div>
          <div className="ui-triki-pad-handler" onClick={() =>this.toggleVisibility()}>{(this.state.visible) ? <ExpandMore/> : <ExpandLess/> }</div>
        </div>
        {
          <KeyboardEventHandler
          handleKeys={['all']}
          onKeyEvent={(key, e) => TrikiKeyboard.getNumber(e.keyCode) ?  this.props.clickButton(TrikiKeyboard.getNumber(e.keyCode),this.props.currentDirection) : false} />
        }
      </div>
    )
  }
}
TrikiPad.propTypes = {
  props:PropTypes.object,
  currentDirection: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired
}
export default TrikiPad