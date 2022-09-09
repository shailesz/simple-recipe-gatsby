import { Link } from "gatsby"
import React from "react"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"

const NavBar = () => {
  const [show, setShow] = React.useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="simply recipes" />
            </Link>
            <button className="nav-btn" onClick={() => setShow(p => !p)}>
              <FiAlignJustify />
            </button>
          </div>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(p => !p)}
            >
              home
            </Link>
            <Link
              to="/recipes"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(p => !p)}
            >
              recipes
            </Link>
            <Link
              to="/tags"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(p => !p)}
            >
              tags
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(p => !p)}
            >
              about
            </Link>
            <div className="nav-link contact-link">
              <Link
                to="/contact"
                className="btn"
                onClick={() => setShow(p => !p)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
