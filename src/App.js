
import preact, { Component } from "preact";

import "./app.scss";
import {
  SettingsButton,
  SettingsMenu,
} from "./components";

class App extends Component {
  render () {
    return <div>
      <SettingsButton />
      <div className="settings-container">
        <SettingsMenu />
      </div>
    </div>
  }
}

export default App;
