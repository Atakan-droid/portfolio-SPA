import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../Utilities/Themes/timelineTheme";
import { Container } from 'react-bootstrap';

export class TechBox extends Component {


    render() {
        return (
            <Container className='techSectionContainer' >
                <div key={this.props.id} className="techBox divHover">
                    <h5><FontAwesomeIcon style={{ fontSize: 50 }} icon={this.props.icon} /></h5>
                    <h4>{this.props.title}</h4>
                    <div className="topDivide" />
                    <p style={{ fontSize: 16 }}>{this.props.description}</p>
                </div>
            </Container>
        )
    }
}

export default TechBox
