import React from 'react';

import confLogo from "../images/badge-header.svg";

import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <article className='Badge'>
        <header className='Badge__header'>
          <img src={confLogo} alt="Logo de la conferencia"/>
        </header>

        <div className='Badge__section-name'>
          <img className='Badge__avatar' src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>Harold Peñaloza</h1>
        </div>

        <div className='Badge__section-info'>
          <h3>Frontend Developer</h3>
          <div>@HarpeBlue</div>
        </div>

        <footer className='Badge__footer'>
          <p>#Platziconf</p>
        </footer>

      </article>
    )
  }
}

export default Badge;
