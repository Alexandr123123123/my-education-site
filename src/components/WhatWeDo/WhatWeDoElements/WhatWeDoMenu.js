import React, { useState } from 'react'
import './WhatWeDoMenu.css'
import ButtonForWhatWeDoMenu from './ButtonForWhatWeDoMenu'

const WhatWeDoMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className="what-we-do-menu">
      <div
        className={`what-we-do-menu-body ${activeMenu ? 'what-we-do-menu-body-active' : ''} `}
      >
        <div className="what-we-do-menu-body-top">
          <div
            className="what-we-do-menu-body-top-button"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <ButtonForWhatWeDoMenu activeMenu={activeMenu} />
          </div>
          <div className="what-we-do-menu-body-top-text">IN DEZE SECTIE</div>
        </div>
        {/* content */}
        <div className="what-we-do-menu-content">
          <div className="what-we-do-menu-body-item">Overzicht</div>
          {/* 1 */}
          <div className="what-we-do-menu-body-item-name-block">
            MARKTSECTOREN
          </div>
          {/*  */}
          <div className="what-we-do-menu-body-items-market-sectors">
            <div className="what-we-do-menu-body-items-market-sectors-left">
              <div className="what-we-do-menu-body-item">
                Audio/visuele systemen
              </div>
              <div className="what-we-do-menu-body-item">
                Biotechnologie/Farma
              </div>
              <div className="what-we-do-menu-body-item">Commercieel</div>
              <div className="what-we-do-menu-body-item">Datacenters</div>
              <div className="what-we-do-menu-body-item">Onderwijs</div>
            </div>
            <div className="what-we-do-menu-body-items-market-sectors-right">
              <div className="what-we-do-menu-body-item">Amusement</div>
              <div className="what-we-do-menu-body-item">Gezondheidszorg</div>
              <div className="what-we-do-menu-body-item">Institutioneel</div>
              <div className="what-we-do-menu-body-item">
                Hernieuwbare energie
              </div>
              <div className="what-we-do-menu-body-item">Speciale systemen</div>
              <div className="what-we-do-menu-body-item">Transport</div>
            </div>
          </div>
          {/* 2 */}
          <div className="what-we-do-menu-body-item-name-block">
            KERNDIENSTEN
          </div>
          {/*  */}
          <div className="what-we-do-menu-body-items-market-sectors">
            <div className="what-we-do-menu-body-items-market-sectors-left">
              <div className="what-we-do-menu-body-item">
                Bouw Informatie Modellering
              </div>
              <div className="what-we-do-menu-body-item">Techniek</div>
            </div>
            <div className="what-we-do-menu-body-items-market-sectors-right">
              <div className="what-we-do-menu-body-item">
                Instrumentatie & Besturing
              </div>
              <div className="what-we-do-menu-body-item">
                Service & Onderhoud
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="what-we-do-menu-body-item-name-block">
            WAARDE TOEVOEGENDE DIENSTEN
          </div>
          {/*  */}
          <div className="what-we-do-menu-body-items-market-sectors">
            <div className="what-we-do-menu-body-items-market-sectors-left">
              <div className="what-we-do-menu-body-item">
                Ontwerpondersteuning
              </div>
              <div className="what-we-do-menu-body-item">Ontwerp-en-bouw</div>
            </div>
            <div className="what-we-do-menu-body-items-market-sectors-right">
              <div className="what-we-do-menu-body-item">
                Geïntegreerde projectuitvoering (IPD)
              </div>
              <div className="what-we-do-menu-body-item">Prefabricage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoMenu
