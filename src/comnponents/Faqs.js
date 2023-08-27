import React from 'react'
const Faqs = () => {
  return (
    <>
      <div className="container">
      <div><span className="font-weight-bold pb-2 mb-4" style={{ fontSize: "36px" }}>Frequently Asked Questions</span><br />
                    <img src='../images/vector 5.png' />
                </div>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item shadow-sm  mb-2 border-0 bg-body rounded">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Dove si monta S.I.R.E.?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm  mb-2 border-0 bg-body rounded">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Chi monta l’impianto S.I.R.E.?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm  mb-2 border-0 bg-body rounded">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Quanto tempo impiega l’installazione?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm  mb-2 border-0 bg-body rounded">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                E’ necessario richiedere autorizzazioni al condominio?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm  mb-2 border-0 bg-body rounded">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                E’ necessario predisporre pratiche per il GSE?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm  mb-2 border-0 bg-body rounded">
            <h2 class="accordion-header" id="headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                L’impianto è garantito?
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra
              </div>
            </div>
          </div>
          <div class="accordion-item shadow-sm  mb-2 border-0 bg-body rounded">
            <h2 class="accordion-header" id="headingSeven">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                E’ possibile usufruire di bonus fiscali?
              </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Faqs