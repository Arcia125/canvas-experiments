
import { Canvas } from "./canvas";
import { EventEmitter } from "./utils";

class Settings extends EventEmitter {
  constructor() {
    super();
    this.settingsNames = [];
    this.settingsOptions
  }

  getSetting = (name, includeOptions = false) => includeOptions ? this[name] : this[name].value;

  getSettings = includeOptions => this.settingsNames.reduce((acc, current) => {
    acc[current] = this.getSetting(current, includeOptions);
    return acc;
  }, {});
  
  addSetting = (name, value, options = {}) => {
    if (this[name]) {
      return;
    }
    this.settingsNames.push(name);
    const setting = {
      value,
      options,
      original: value,
    };
    this[name] = setting;
  }

  addSettings = settings => {
    if (!settings) {
      return;
    }
    Object.keys(settings).forEach(setting => {
      const settingObj = settings[setting];
      const value = settingObj.value;
      const options = settingObj.options || {};
      this.addSetting(setting, value, options);
    });
  }

  change = (settingName, value) => {
    if (!this.hasOwnProperty(settingName)) {
      console.error(new TypeError("Setting could not be found"));
      return;
    }
    this[settingName].value = value;
    this.onChange(settingName);
  }

  onChange = settingName => {
    this.emit("change");
    this.emit(settingName);
  }

  getSettingOptions = settingName => this[settingName] && this[settingName].options;

  getSettingOption = (settingName, optionName) => {
    const settingOptions = this.getSettingOptions(settingName);
    return settingOptions && settingOptions[optionName];
  }

  getSettingType = settingName => this.getSettingOption(settingName, "type") || "range";

  isActivated = (settingName, optionName) => Boolean(this.getSettingOption(settingName, optionName));

  getSettingLabel = settingName => this.getSettingOption(settingName, "label") || settingName;

  getSettingMin = settingName => this.getSettingOption(settingName, "min");

  getSettingMax = settingName => this.getSettingOption(settingName, "max");

  resetSetting = settingName => {
    this.change(settingName, this[settingName].original);
  }

  resetSettings = () => this.settingsNames.forEach(setting => this.resetSetting(setting));

}

export default new Settings();
