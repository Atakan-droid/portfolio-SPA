import React from 'react'
import TechBox from './techBox.js';
import { faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import "../../Utilities/Themes/timelineTheme";
import { faDesktop } from '@fortawesome/free-solid-svg-icons';


function chosenIcon(icon) {
    if (icon === "react") {
        return faReact;
    } else if (icon === "pc") {
        return faDesktop
    } else if (icon === "vue") {
        return faVuejs;
    } else {
        return faDesktop;
    }
}
function TechSection(props) {

    return (
        <div>
            <div className="techSection">
                <div className="techBoxTitle">
                    <h1>{props.locale[0].locale === "tr" ? `TEKNOLOJİLER` : `Technologies`}</h1>
                    <div className="tech-section">
                        {props.locale.map((item, i) => {
                            return (
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
                </div>
                <div className="bottomDivide" />
            </div>
        </div>
    )
}


export default TechSection
