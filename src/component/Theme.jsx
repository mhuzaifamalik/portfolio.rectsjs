import React, { useEffect, useState } from 'react';
import { themes } from '../data';
import Themeitem from './Themeitem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './theme.css';

const getStorageColor = () => {
  let color = 'hsl(252 ,35% ,51%)';
  if (localStorage.getItem('color')) {
    color = localStorage.getItem('color');
  }
  return color;
};

const Theme = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState('light-theme');

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleThemes = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
const cssRoot = document.querySelector(':root')
  useEffect(() => {
    document.documentElement.className = theme;
    // const rootStyle = getComputedStyle(cssRoot)
    cssRoot.style.setProperty('--first-color',color)
    // console.log(rootStyle)
    localStorage.setItem('color', color);

  }, [theme, color]);

  return (
    <>
      <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
        <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
          <FaCog />
        </div>
        <div className="theme__toggler" onClick={toggleThemes}>
          {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
        </div>
        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => (
            <Themeitem key={index} {...theme} changeColor={changeColor} />
          ))}
        </div>
        <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>
          &times;
        </div>
      </div>
    </>
  );
};

export default Theme;
