
import preact, { Component } from "preact";
import classNames from "classnames";

import "./SettingsMenu.scss";

class SettingsMenu extends Component {


  render ({}, {}) {
    return <div className={classNames("settings-menu")}>
        <h1 className="title">Settings Menu</h1>
      </div>
  }


}

export default SettingsMenu;
