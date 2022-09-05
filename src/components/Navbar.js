import React from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'



export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.navbar} bg-${props.navbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li className="nav-item">
             <Link className="nav-link mx-3" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/about" >{props.about}</Link>
            </li>
          </ul>
        </div>
        </div>
    </nav>
    </div>
  )
}

// checking to make sure the props are type string only
Navbar.propTypes = {
       title: PropTypes.string,
       about: PropTypes.string
}

// set default props here if I don't pass props
Navbar.defaultProps = {
    title: "Set title here",
    about: "Set about title here"
}