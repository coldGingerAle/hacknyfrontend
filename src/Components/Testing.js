import React, { Component } from 'react';
import FadeUnit from '../Components/FadeUnit';
import AnimatedText from '../Components/AnimatedText';
import AnimatedWord from '../Components/AnimatedWord';
import { Link } from 'react-router-dom';
import Begin1 from './Begin1';
import Begin0 from './Begin0';
import Begin2 from './Begin2';

export default class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      show: false,
      step: 0
    })
    this.nextStep = this.nextStep.bind(this);
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  nextStep = () => {
    this.setState({
      step: (this.state.step + 1) % 3
    })
  }
  render() {
    let component;
    switch(this.state.step) {
      case 0:
        component = <Begin0 nextStep={this.nextStep} />
        break;
      case 1:
        component = <Begin1 nextStep={this.nextStep} />;
        break;
      case 2:
        component = <Begin2 nextStep={this.nextStep} />;
        break;
    }
    return(
      <div>
        {component}
      </div>
    )
  }
}
