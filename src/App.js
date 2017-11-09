
import preact, { Component } from "preact";

import "./app.scss";
import { Settings } from "./containers";

class App extends Component {
  render () {
    return (
      <div>
        <Settings />
      </div>
    );  
  }
}

export default App;
