import React from 'react';
import logo from '../../Utilities/Img/Logo_AG.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub,faBehance} from '@fortawesome/free-brands-svg-icons';


 function Profile({locale}){
    return(
      <div>
        <div className="row">
      <div className="side">
        <div className="logo">
          <img alt="logo" src={logo}/>
      </div>
      <h3>{locale.name}</h3>
        <p>{locale.job}</p>
        <div className="social-media">
          <a href={locale.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>      
          <a href={locale.github}><FontAwesomeIcon icon={faGithub} /></a>     
          <a href={locale.behance}><FontAwesomeIcon icon={faBehance} /></a>
        </div>
      </div>
      <div className="main divHover">
        <h2>{locale.aboutMe}</h2>
        <div  className="topDivide"/>
        <h5 style={{padding:20,fontSize:20}}>{locale.description}</h5>
        <br/>
        <div className="bottomDivide"/>
      </div>
    </div>
    <div style={{marginTop:50}} className="bottomDivide"/>
      </div>
    )
 }


export default Profile;
