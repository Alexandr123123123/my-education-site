import React from 'react'
import './SuccessIsShared.css'
import Navigation from './Navigation'
import PhotoAndQuickFacts from './PhotoAndQuickFacts'

const SuccessIsShared = () => {
  return (
    <div className="success-is-shared">
      <div className="success-is-shared-body">
        <Navigation />
        <div className="success-is-shared-body-title">Succes wordt gedeeld</div>
        <div className="success-is-shared-body-subtitle">
          Toegewijd. Verbonden. Betrokken.
        </div>
        <div className="success-is-shared-body-text">
          Vanaf het begin zijn wij gericht op het creëren van waarde voor de
          mensen en ruimtes waarin wij werken. Wij realiseren renovatie- en
          technische projecten die bijdragen aan comfort, veiligheid en
          duurzaamheid. Dankzij een cultuur van verantwoordelijkheid,
          vakmanschap en samenwerking begrijpen onze teams hun rol en voeren zij
          hun werk uit met precisie en betrokkenheid. Ons succes wordt gedreven
          door een “alles geven” mentaliteit — een aanpak die direct bijdraagt
          aan het succes van onze klanten.
        </div>
        <button className="success-is-shared-body-button">
          WAAROM ROSENDIN
        </button>
      </div>
      <PhotoAndQuickFacts />
    </div>
  )
}

export default SuccessIsShared
