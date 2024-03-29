import React, { useState } from 'react';
import "./App.css";
import "./Utilities/Themes/timelineTheme"
import ScrollToTop from './Utilities/ScrollToTop/ScrollToTop';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Utilities/Themes/timelineTheme.js';
import turkeyIcon from './Utilities/Img/turkey.webp';
import enIcon from './Utilities/Img/united-kingdom.webp';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import Profile from './Components/Profile/profile';
import Timeline from './Screens/timeline';
import TechSection from './Components/TechnologySection/techSection.js';
import localTR from './Utilities/Localization/locales/localTR';
import localEN from './Utilities/Localization/locales/localEN';


function App() {

  const [theme, setTheme] = useState("dark");
  const [locales, setLocales] = useState(localEN);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const localesToggler = () => {
    locales === localTR ? setLocales(localEN) : setLocales(localTR)
  }


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="options">
        <a onClick={() => themeToggler()}>{theme === "light" ? <div>
          <CgSun /></div>
          :
          <div>
            <HiMoon />
          </div>}
        </a>
        <a onClick={() => localesToggler()}>{locales === localEN ?
          <img alt="enIcon" src={enIcon} /> : <img alt="turkeyIcon" src={turkeyIcon} />}</a>
      </div>
      <div>
        <Profile locale={locales.profile} />
        <TechSection locale={locales.technology} />
        <div className="timeline">
          <Timeline theme={theme} locale={locales.timeline} />
        </div>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
