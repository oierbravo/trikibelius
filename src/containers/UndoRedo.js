import React from 'react'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import UndoRedoButtons from '../components/UI/UndoRedoButtons';

const mapStateToProps = state => {
    return {
      canUndo: state.elements.past.length > 0,
      canRedo: state.elements.future.length > 0
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UndoRedoButtons)