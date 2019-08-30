import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img
            className="logoImg"
            data-test="logoImg"
            src={Logo}
            alt="weather-logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
