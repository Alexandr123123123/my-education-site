import React from 'react'
import './HistoryTwo.css'

const HistoryTwo = () => {
  return (
    <div className="landing-history-two">
      <div className="landing-history-two-filter"></div>
      <div className="container">
        <div className="landing-history-two-container">
          <div className="landing-history-two-content-container">
            <div className="landing-history-two-content-block">
              <div className="landing-history-two-name-content-block">
                03. ERVARING EN VAKMANSCHAP
              </div>
              <div className="landing-history-two-content-block-title">
                Sterke basis voor elk project
              </div>
              <div className="landing-history-two-content-block-body">
                Wij beschikken over brede ervaring in renovatie en technische
                werkzaamheden. Met een professionele aanpak en oog voor detail
                realiseren wij betrouwbare en duurzame oplossingen waarop u kunt
                vertrouwen.
              </div>
              <button className="landing-history-two-content-block-button">
                MEER WETEN
              </button>
            </div>
            <div className="landing-history-two-content-video-flex-container">
              <div className="landing-history-two-content-video">
                <div className="landing-history-two-content-video-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/src/worker_1_1.jpg`}
                    alt="abc"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryTwo
