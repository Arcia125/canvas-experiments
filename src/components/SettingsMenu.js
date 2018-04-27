
import preact, { Component } from "preact";
import classNames from "classnames";

import "./SettingsMenu.scss";
import Settings from "../Settings";
import Setting from "./Setting";

class SettingsMenu extends Component {

  constructor(props) {
    super(props);
    Settings.on("change", () => {
      this.changeBackgroundColor(Settings.getSetting("backgroundColor"));
      this.forceUpdate();
    })
  }

  changeBackgroundColor = color => {
    document.body.style.backgroundColor = color;
  }

  createChangeHandler = setting => event => {
    const value = event.target.value;
    Settings.change(setting, value);
  }


  render ({}, {}) {
    return (
      <div className={classNames("settings-menu")}>
        <h1 className="title">Settings</h1>
        <div className="individual-settings-container">
          {Settings.settingsNames.map(setting => {
            const name = setting;
            const labelText = Settings.getSettingLabel(setting);
            const type = Settings.getSettingType(setting);
            const value = Settings.getSetting(setting);
            const onChange = this.createChangeHandler(setting);
            const min = Settings.getSettingMin(setting);
            const max = Settings.getSettingMax(setting);
            const step = Settings.getSettingOption(setting, "step") || 1;
            return (
              <Setting name={name} labelText={labelText} type={type} value={value} onChange={onChange} min={min} max={max} step={step} />
              )
            })}
        </div>
        <div className="individual-settings-actions-container">
          <button onClick={e => Settings.resetSettings()}>Reset</button>
        </div>
      </div>
    );
  }


}

export default SettingsMenu;
