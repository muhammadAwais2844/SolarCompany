import React from "react";
// import logos from "./../Components/logo.png";
// import mail from "./../Components/mail.png";
// import call from "./../Components/call.png";

const Header = () => {
  return (
    <header className="container-fluid">
    <div className="p-3 text-center bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <a href="#!" className="ms-md-2">
              <img src="../images/logo.png" height={44} width={92} alt="Logo" />
            </a>
          </div>
          <div className="col-md-8 col-sm-8 col-lg-8 d-flex justify-content-center justify-content-md-end align-items-center">
            <div className="d-flex justify-content-end">
              <p className="text-reset mt-3 me-5">
                <img className="ms-4" src="../images/mail.png" alt="Email" />
                awaisxdeveloposis@gmail.com
                <img className="ms-4" src="../images/call.png" alt="Phone" /> +923015499431              </p>
            </div>
            <div className="btn btn-success ms-3 batn">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="container-fluid p-3 text-center bg-white border-bottom">
      <ul className="list-unstyled col-md-12 col-sm-12 col-lg-12 d-flex justify-content-center justify-content-md-end align-items-center d-flex flex-wrap justify-content-center justify-content-md-evenly">
        <li className="nav-item">Home</li>
        <li className="nav-item">Chi Siamo</li>
        <li className="nav-item">S.I.R.E</li>
        <li className="nav-item">SIRE Features</li>
        <li className="nav-item">Why SIRE?</li>
        <li className="nav-item">SIRE Product</li>
        <li className="nav-item">How it Works?</li>
      </ul>
    </div>
  </header>
  
  );
};

export default Header;
