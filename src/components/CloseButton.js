
import preact, { Component } from "preact";

import "./CloseButton.scss";

class CloseButton extends Component {
  render () {
    return <button className="close-button" onClick={this.props.onClick}>X</button>
  }
}

export default CloseButton;
