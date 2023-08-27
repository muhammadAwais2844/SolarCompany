import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col ">
            <img src="../images/hero.png" alt="test" className="res-img w-100" />
            <div className=" ">
              <div className=" centered">
                <h1 style={{fontSize: '64px'}}>ll tuo accesso al sole</h1>
                <p style={{fontSize: '24px', fontWeight: '0px !important'}}>There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero