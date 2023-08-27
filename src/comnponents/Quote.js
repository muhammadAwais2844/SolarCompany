import React from 'react'

const Quote = () => {
  return (
    <>
      <section className=" gradient-custom">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10">
              <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                <div className="carousel-inner pt-2 pb-5">
                  <div className="carousel-item active">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-8 col-lg-9 col-xl-8">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-4 ps-3">
                            <figure>
                              <blockquote className="blockquote mb-4">
                                <p>
                                  <i class="fa fa-lg text-secondary fa-solid fa-quote-left"></i>
                                  <span className="font-italic">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Pariatur sint nesciunt ad itaque aperiam expedita officiis incidunt
                                    minus facere, molestias quisquam impedit inventore.</span>
                                  <i class="fa fa-lg text-secondary fa-solid fa-quote-right"></i>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                Christian Testoni
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Quote;