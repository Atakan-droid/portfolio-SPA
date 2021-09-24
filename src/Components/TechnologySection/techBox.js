import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "../../Utilities/Themes/timelineTheme";

export class TechBox extends Component {

    
    render() {
        return (
            <div key={this.props.id} className="techBox divHover">
                <h5><FontAwesomeIcon style={{fontSize:50}} icon={this.props.icon}/></h5>
                <h4>{this.props.title}</h4>
                <div className="topDivide"/>
                <p>{this.props.description}</p>
              </div>
        )
    }
}

export default TechBox
