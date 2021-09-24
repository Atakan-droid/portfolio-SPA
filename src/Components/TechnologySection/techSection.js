import React, { Component } from 'react'
import techElements from './techElements.js';
import TechBox from './techBox.js';
import {faReact,faAngular} from '@fortawesome/free-brands-svg-icons';
import "../../Utilities/Themes/timelineTheme";
import { faDesktop } from '@fortawesome/free-solid-svg-icons';


export class TechSection extends Component {

    

    render() {
        
        function chosenIcon(icon) {
            {
                if(icon==="react"){
                    return faReact;
                }else if(icon==="pc"){
                   return faDesktop
                }else if(icon==="angular"){
                    return faAngular
                }else{
                   return faDesktop;
                }
            }
    }
        return (
            <div>
                <div style={{marginTop:50}} className="topDivide"/>
          <div className="techBoxTitle">
            <h1>TEKNOLOJİLER</h1>
          <div className="tech-section">
                {techElements.map((item,i)=>{ 
                return(
                    <div key={i}>
                    <TechBox
                    title={item.title}
                    icon={chosenIcon(item.icon)}
                    description={item.description}
                    />
                    </div>
                )
                })}
            </div>
            <div className="bottomDivide"/>
          </div>
            </div>
        )
    }
}

export default TechSection
