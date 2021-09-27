import { createGlobalStyle } from "styled-components"
import darkBG from '../Img/darkBG.png';
import lightBG from '../Img/lightBG.png';

export const lightTheme={
    background:lightBG,
    color:'#353535',
    workButton: '#F01A1A',
    workButtonHover:'#F56767',
    schoolButton: '#f9c74f',
    schoolButtonHover:'#f3bc3c',
    timelineStyleBg:'#d9d9d9',
    timelineStyleColor:'#353535',
    date:'#00000D',
    
}

export const darkTheme={
    background:darkBG,
    color:'#E1D9D1',
    workButton: '#2C2C2B',
    workButtonHover:'#F01A1A',
    schoolButton: '#2C2C2B',
    schoolButtonHover:'#f3bc3c',
    timelineStyleBg:'#171720',
    timelineStyleColor:"#E1D9D1",
    date:'#FDFBF9',
}
export const GlobalStyles=createGlobalStyle`
body {
    background-image:url(${props=>props.theme.background});
    color:${props=>props.theme.color};
    font-family: "Bookman",sans-serif;
    font-size: 16px;
}


.divHover{
    transition: 1s ease;
}
.divHover:hover{

  -webkit-transform: scale(1.03);
  -ms-transform: scale(1.03);
  transform: scale(1.03);
  transition: 1s ease;
}

h3{
    padding-top:0.25em ;
}

.vertical-timeline-element-content {
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 2em 3em !important;
    border-radius: 10px;
  }

.vertical-timeline-element-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${props=>props.theme.background}, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);}


.date{
    color:${props=>props.theme.date};
}

.flagButton{
  width:5px;
  height:5px;
}

#description{
    margin: 1.5em 0 2em 0;
    overflow-wrap: break-word;
}
.colorButton{
    font-size: 16pt;
    margin-top: 0.5em;
    margin-right: 1em;
    position: absolute;
    top: 0;
    right: 0;
    color:${props=>props.theme.color};
    background-color: ${props=>props.theme.background};
}
.button1{
    text-decoration: none;
    padding: 0.5em 1em 0.5em;
    border-radius: 5px;
    color: white;
    border-radius: 10px;
}
.workButton{
    background-color: ${props=>props.theme.workButton};
    margin: 5px;
    border-style: solid;
    border-width: 1px;
}
.workButton:hover{
    background-color:${props=>props.theme.workButtonHover} ;
    margin: 5px;
    border-style: solid;
    border-width: 1px;
}
.schoolButton{
    background-color: ${props=>props.theme.schoolButton};
    margin: 5px;
    border-style: solid;
    border-width: 1px;
}
.schoolButton:hover{
    background-color: ${props=>props.theme.schoolButtonHover};
    margin: 5px;
    border-style: solid;
    border-width: 1px;
}

@media only screen and (max-width:1700px) {
    .vertical-timeline-element-date{
        display: block !important;
        float: none !important;
        color: ${props=>props.theme.date};
        margin-top: 1.5em;
    }
}

//Profile Section Css



.row{
    margin:10px;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    text-align: center;
    font-size: 20px;
    color:${props=>props.theme.timelineStyleColor};
    
}
.side {
    flex: 30%;
    padding: 20px;
    text-align: center;
  }

  .main {
    flex: 70%;
    padding: 20px;
    box-shadow: 
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15);
    background:${props=>props.theme.timelineStyleBg};
    border-radius: 10px;
  }
.social-media{
  align-items: center;
  font-size: 30px;
}
.social-media>a{
  padding: 10px;
  margin:0 1rem;
}
.main>a{
  color:${props=>props.theme.color};
  text-decoration:none;

}

.topDivide{
 
    width: 80%;
    height: 1px;
    margin:auto;
    margin-top:4%;
    margin-bottom:2%;
    background: #434343;
    border-bottom: 1px solid black;

}
.bottomDivide{
 
  width: 80%;
  height: 1px;
  margin:auto;
  margin-bottom:5%;
  background: #434343;
  border-bottom: 1px solid black;

}
  
  .logo{

    margin:auto;
  }
  .logo>img{
    width: 70%;
    height: 70%;
  }
  @media screen and (max-width:1000px) {
    .row {   
      flex-direction: column;
    }

  }

  //Tech Section CSS

  .techSection{
    margin-left:5%;
    margin-right:5%;
    
  }
  .techBoxTitle{
    text-align:center;
    
  }
  .techBox{
    
  }
  .techBox>h4{
    font-size:30px;
    margin-top:-30px;
  }
  
  .tech-section{
    display: flex;
    text-align: center;
    margin: 1em;
  }
  .tech-section>div{
    border-radius: 10px;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15);
    flex-grow: 2;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 24px;
    background:${props=>props.theme.timelineStyleBg};
    color:${props=>props.theme.timelineStyleColor};
  }

  @media screen and (max-width:1000px) {
    .tech-section{
      flex-direction: column;
    }
  }
   
  // ScrollTo Top Css

  .scroll-to-top{
    position: fixed;
    bottom:1%;
    left:85%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    border-radius: 100%;
    background: ${props=>props.theme.timelineStyleBg};
    z-index: 1;
    color: ${props=>props.theme.timelineStyleColor};
}
.scroll-to-top>i{
    margin-top: 10px;
    animation:scrollTop 0.5s alternate ease infinite;

}
@keyframes scrollTop {
    from{
        transform: translateY(2px);
    }
    to{
        transform: translateY(-1px);
    }
}

`

