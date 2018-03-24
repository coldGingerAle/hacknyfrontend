import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import axios from 'axios';
import FadeUnit from './FadeUnit'
import AnimatedWord from './AnimatedWord'
import AnimatedText from './AnimatedText';
import BlandFade from './BlandFade';
import { Transition } from 'react-transition-group'

class Begin2 extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
  }

  componentDidMount() {
    this.setState({
      show: true
    })
  }

 render() {
  const text = "Welcome to page 3!";
  return (
    <BlandFade show={this.state.show}>
      <div style={styles.form}>
         <AnimatedText fontSize={"0.8em"} color={"white"}>{text}</AnimatedText>
         <div onClick={this.props.nextStep} style={styles.begin}>
          <i style={{color: 'white'}} className="fa fa-rocket" aria-hidden="true"></i> Let us begin!
         </div>
      </div>
    </BlandFade>
  );
}
}

export default Begin2 = Radium(Begin2);

var styles = {
  form: {
    width: '100vw',
    margin: '0 auto',
    padding: '100px',
    background: 'blue',
    fontSize: '2em'
  },
  begin: {
    color: 'white',
    ':hover': {
      fontSize: '1.5em',
      cursor: 'pointer'
    },
    transition: 'all .5s ease-in-out'
  }
}
