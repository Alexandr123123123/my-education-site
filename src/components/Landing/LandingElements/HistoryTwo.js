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
                03. 100 JAAR ROSENDIN
              </div>
              <div className="landing-history-two-content-block-title">
                Rosendin viert 100-jarig jubileum
              </div>
              <div className="landing-history-two-content-block-body">
                Wij heffen het glas op 100 jaar zakelijk en klantensucces, een
                mensgerichte cultuur en de voortdurende evolutie van ons
                dienstenaanbod.
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
