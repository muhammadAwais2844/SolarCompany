import React from 'react'

const Team = () => {
    return (
        <>
            <div className="container my-5">
                <section className="team-section text-center dark-grey-text">
                    <div><span className="font-weight-bold pb-2 mb-4" style={{ fontSize: "36px" }}>CHI SIAMO</span><br />
                        <img src='../images/vector 5.png' />                </div>
                    <p className="text-muted w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
                        eum porro a pariatur veniam.</p>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="avatar mx-auto">
                                <img src="../images/Testoni Cristian.png" className="rounded z-depth-1" alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Testoni Cristian</h5>
                            <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci sed quia non numquam modi tempora eius.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="avatar mx-auto">
                                <img src="../images/Massimo Fabi.png" className="rounded z-depth-1" alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Massimo Fabi</h5>
                            <p className="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
                                doloremque rem laudantium totam aperiam.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="avatar mx-auto">
                                <img src="../images/Gavioli.png" className="rounded z-depth-1" alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Francesco Gavioli</h5>
                            <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim est fugiat nulla id eu laborum.</p>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Team