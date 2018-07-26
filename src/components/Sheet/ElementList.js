import React from 'react'
import PropTypes from 'prop-types'
import Element from './Element'
import "./ElementList.css"
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const ElementList = ({ classes,elements, clickElement }) => (
  <Paper className={["sheet-container",classes].join(' ')}>
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
  </Paper>
)
ElementList.propTypes = {
  classes: PropTypes.object,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      data: PropTypes.shape({
          number: PropTypes.number.isRequired,
          direction: PropTypes.string.isRequired
      }),
    }).isRequired
  ).isRequired,
  clickElement: PropTypes.func.isRequired
}
export default withTheme()(ElementList)