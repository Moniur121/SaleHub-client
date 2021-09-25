import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <section>
      <div className="top_header container">
        <div className="d-flex justify-content-between align-content-center mt-2">
          <div>
            <p className="text-dark fs-3">Welcome To SaleHub</p>
          </div>
          <div>
            <p className="fs-5 header_contact">
              <span>
                <BiPhoneCall /> 9785245685
              </span>
            </p>
          </div>
          <div>
            <Link to="/LogIn">
              <button type="button" className="btn btn-primary">
                <FaUserCircle className="fs-4"/>Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_header bg-dark">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light  ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" className="text-light fs-3">
                <span className="text-primary">Sale</span>
                <span>Hub</span>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <Link to="/" className="nav-link text-light fs-5">Home</Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light fs-5" href="#">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light fs-5" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link text-light fs-5" to="/admin">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Header
