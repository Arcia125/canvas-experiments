
import preact, { Component } from "preact";

import "./SettingsMenu.scss";

class SettingsMenu extends Component {


  toggleDisplay = () => {
    this.isShown = !this.isShown;

  }

  show = () => {
    this.settingsMenu
  }

  hide = () => {

  }

  render () {
    return <div className="settings-menu">Settings Menu</div>
  }


}

export default SettingsMenu;
