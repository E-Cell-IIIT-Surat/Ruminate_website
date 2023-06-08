import React from 'react'
import "./Stats.css";
import {GoLightBulb} from "react-icons/go";
import {GiTeamUpgrade} from "react-icons/gi";
import {GiCompanionCube} from "react-icons/gi";
const Stats = () => {
  return (
    <div id="stats">
        <div className='iconWithDescription'><GoLightBulb className="lightbulb"/> 3
        <div className='iconDescription'>Startups</div>
        </div>
        <div className='iconWithDescription'><GiTeamUpgrade className="lightbulb"/> 15+
        <div className='iconDescription'>Dedicated Team</div>
        </div>
        <div className='iconWithDescription'><GiCompanionCube className="lightbulb"/> 20
        <div className='iconDescription'>Companies Contacted</div>
        </div>
        <div className='iconWithDescription'><GoLightBulb className="lightbulb"/> 3
        <div className='iconDescription'>Companies Contacted</div>
        
        </div>
    </div>
  )
}

export default Stats