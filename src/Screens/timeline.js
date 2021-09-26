import React from 'react';
import {ReactComponent as WorkIcon} from '../Utilities/Img/work.svg';
import {ReactComponent as SchoolIcon} from '../Utilities/Img/school.svg';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


function Timeline(props){
  let WorkIconStyles={background:"#F01A1A"};
  let SchoolIconStyles={background:"#f9c74f"};
  let DarkTimelineStyles={background:'#171720',color:'#E1D9D1'};
  let LightTimelineStyles={background:'#d9d9d9',color:'#353535'};
    return(
        <VerticalTimeline>
        {
             props.locale.map((element,i)=>{
              let isWorkIcon=element.icon==="work";
              let showButton=element.buttonText!==undefined 
              && element.buttonText!==null 
              && element.buttonText !=="";
              let publishShowButton=element.publishButtonText!==undefined
              && element.publishButtonText!==null
              && element.publishButtonText!=="";
              return (
                <VerticalTimelineElement
                key={i}
                date={element.date}
                dateClassName="date"
                contentStyle={{background:`${props.theme==="light"? (LightTimelineStyles.background) : DarkTimelineStyles.background}`
                ,color:`${props.theme==="light"? LightTimelineStyles.color:DarkTimelineStyles.color}`}}
                iconStyle={isWorkIcon? WorkIconStyles:SchoolIconStyles}
                icon={isWorkIcon? <WorkIcon/>:<SchoolIcon/>}
                >
                  <div className="divHover">
                  <h3 className="vertical-timeline-element-title">{element.title}</h3>
                  <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                  <div className="descriptinoDiv">
                  <p id="description">{element.description}</p>
                  </div>
                  </div>
                  <div style={{display:'flex',flexDirection:"row"}}>{showButton && (<a className={`button1 ${isWorkIcon?"workButton":"schoolButton"}`} href={element.buttonLink}>{element.buttonText}</a>)}
                  {publishShowButton && (<a className={`button1 ${isWorkIcon?"workButton":"schoolButton"}`} href={element.publishButtonLink}>{element.publishButtonText}</a>)}</div>
                </VerticalTimelineElement>
              )
            })
        }
      </VerticalTimeline>
    )
  }

export default Timeline;
