
import preact, { Component } from "preact";
import "./SettingsButton.scss";

class SettingsButton extends Component {
  render () {
    return <button className="settings-button" onClick={this.props.onClick}>Settings</button>
  }
}

export default SettingsButton;
