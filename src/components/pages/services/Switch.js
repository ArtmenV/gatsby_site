import * as React from 'react'

export const Switch = ({ handleToggleSwitch }) => (
  <label className="switch__frame">
    <input type="checkbox" onClick={ handleToggleSwitch }/>
    <span className="switch__slider switch-round"></span>
  </label>
);
