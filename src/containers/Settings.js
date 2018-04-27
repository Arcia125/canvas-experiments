
import preact, { Component } from "preact";
import classNames from "classnames";

import "./Settings.scss";
import {
  SettingsButton,
  SettingsMenu,
  CloseButton,
} from "../components";

class Settings extends Component {

  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeMenu = () => {
    this.setState({ isOpen: false });
  }

  openMenu = () => {
    this.setState({ isOpen: true });
  }

  render ({}, { isOpen }) {
    return (
      <div className="settings">
        <SettingsButton onClick={this.toggleMenu}/>
        <div className={classNames("settings-container", { hidden: !isOpen })}>
          <CloseButton onClick={this.closeMenu} />  
          <SettingsMenu onRequestClose={this.closeMenu} isOpen={isOpen} />
        </div>
      </div>
    )
    
  }


}

export default Settings;
