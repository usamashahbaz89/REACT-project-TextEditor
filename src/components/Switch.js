import React from 'react'

export default function Switch(props) {
    
  return (
    <div>
      <div className="form-check form-switch my-4 mx-4">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.darkMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btn}</label>
</div>
    </div>
  )
}
