import React from 'react';

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <article>
        <header>
          <img src={confLogo} alt="Logo de la conferencia"/>
        </header>

        <div>
          <img src="" alt="Avatar"/>
          <h1>Harold Peñaloza</h1>
        </div>

        <div>
          <p>Frontend Developer</p>
          <p>@HarpeBlue</p>
        </div>

        <footer>
          <p>#Platziconf</p>
        </footer>

      </article>
    )
  }
}

export default Badge;
