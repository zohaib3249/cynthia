import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BiGear } from 'react-icons/bi';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand ml-3" href="#"><h2>Cynthia</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active center-text" aria-current="page" href="#">Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Release</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <BiGear />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container main_page">
        <div className="row">
          <div className="col-md-12">
            <h1>Welcome to Cynthia</h1>
            <p>Cynthia is a tool for software teams to organize and track their work.</p>
            <button className="btn blue_color mt-4">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
