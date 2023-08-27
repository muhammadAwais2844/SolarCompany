import React from 'react'

const Card_icon_desc = () => {
  return (
    <>
      <div><span className="font-weight-bold pb-2 mb-4" style={{ fontSize: "36px" }}>Perche S.I.R.E</span><br />
        <img src='../images/vector 5.png' />
      </div>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="frame  px-3 shadow-lg p-3 mb-5 bg-body rounded " style={{ minWidth: 285, maxWidth: 440, height: 363, margin: 12 }}>
              <div className="widget-img pt-2">
                <img src="../images/Group-3.png" style={{ height: 87 }} alt="Card image icon" className="image" />
              </div>
              <div className="card-body">
                <h3 className="card-title heading-title">Respario Energetico</h3>
                <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: 122, whiteSpace: 'normal' }}>
                  Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            {/* 2nd card  */}
            <div className="frame  px-3 shadow-lg p-3 mb-5 bg-body rounded " style={{ minWidth: 285, maxWidth: 440, height: 363, margin: 12 }}>
              <div className="widget-img pt-2">
                <img src="../images/Group-3.png" style={{ height: 87 }} alt="Card image icon" className="image" />
              </div>
              <div className="card-body">
                <h3 className="card-title heading-title">Mobilita Elettrica</h3>
                <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: 122, whiteSpace: 'normal' }}>
                  L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            {/* 3rd card  */}
            <div className="frame  px-3 shadow-lg p-3 mb-5 bg-body rounded " style={{ minWidth: 285, maxWidth: 440, height: 363, margin: 12 }}>
              <div className="widget-img pt-2">
                <img src="../images/Group-1.png" style={{ height: 87 }} alt="Card image icon" className="image" />
              </div>
              <div className="card-body">
                <h3 className="card-title heading-title">
                  Communita Energetica
                </h3>
                <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: 122, whiteSpace: 'normal' }}>
                  Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card_icon_desc