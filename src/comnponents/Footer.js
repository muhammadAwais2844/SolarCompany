import React from 'react'

const Footer = () => {
  return (
<>

<footer className="text-center backsi text-lg-start bg-dark  text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between ">
   
    {/* <div>
      <a href className="me-4 link-secondary ">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 link-secondary">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 link-secondary">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 link-secondary">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 link-secondary">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 link-secondary">
        <i className="fab fa-github" />
      </a>
    </div> */}
  </section >
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3 text-light ">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
    
              <img src="../images/logo.png" height={54} width={102} alt="Logo" />
       
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 opacity-100 ">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Chi Siamo</a>
          </p>
          <p>
            <a href="#!" className="text-reset">S.I.R.E</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Why SIRE?</a>
          </p>
          <p>
            <a href="#!" className="text-reset">SIRE Product</a>
          </p>
          <p>
            <a href="#!" className="text-reset">How it Works?</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Help Center </a>
          </p>
          <p>
            <a href="#!" className="text-reset">Privacy Policy</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Terms & Condition</a>
          </p>
          <p>
            <a href="#!" className="text-reset">FAQ</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fa fa-home me-3 text-secondary" /> Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
          <p>
            <i className="fa fa-envelope me-3 text-secondary" />
            m.awaisbaddar@gmail.com
            
            <br />
          </p>
          <p><i className="fa fa-phone me-3 text-secondary" />+923015499431</p>
          
        </div>
      </div>
    </div>
    
  </section>
  <section className=' container mb-2 pb-4'>
  <hr style={{color: '#fff'}}/>
  <div className='d-flex'>
  <div className="text-left px-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2023 Copyright:
  </div>
  <div  className='ms-auto'>
  <img src="../images/fb.png" className='me-3' alt="Logo" />
  <img src="../images/insta.png" className='me-3' alt="Logo" />
  <img src="../images/twt.png" className='me-3'  alt="Logo" />
  </div>
  </div>
  </section>
 
</footer>


</>
  )
}

export default Footer