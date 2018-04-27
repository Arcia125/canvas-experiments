
import preact, { Component } from "preact";

import "./Setting.scss";

class Setting extends Component {
  render ({ name, labelText, type, onChange, value, min, max, step }, { }) {
    return (
      <div key={name} className="setting-individual">
        <label className="setting-individual--label" htmlFor={name}>
          {labelText}
        </label>
        <input className="setting-individual--text-input" type="text" value={value} min={min} max={max} onChange={onChange} />
        <input type={type} value={value} min={min} max={max} name={name} onChange={onChange} step={step} />
      </div>
    )
  }
}

export default Setting;
