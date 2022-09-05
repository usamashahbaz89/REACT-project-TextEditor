import React from 'react'

export default function Alert(props) {
  return (
    <div>
      props.Alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.Alert.type}</strong>{props.Alert.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </div>
  )
}
