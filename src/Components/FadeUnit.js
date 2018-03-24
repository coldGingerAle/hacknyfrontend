import React, { Component } from 'react';
import { Transition } from 'react-transition-group'
import Styles from './Styles'

export default class FadeUnit extends Component {
  render() {
    return(
      <Transition in={this.props.show} timeout={this.props.delay || 300}>
        {(state) => (
          <div style={{
            ...Styles.Fade.defaultStyle,
            ...Styles.Fade.experiment(this.props.increment)[state],
            color: this.props.color ? this.props.color : '#5CD7FD',
            fontSize: this.props.fontSize ? this.props.fontSize : '2em',
            width: this.props.blank ? this.props.fontSize : 'auto'
          }}>
            {this.props.children}
          </div>
        )}
      </Transition>
    )
  }
}
