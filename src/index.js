// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
  'a',
  { href: 'https://platzi.com' },
  'Hola! Soy los children.'
  )

const nombre = 'Harold';

const element1 = React.createElement(
  'h1',
  {},
  `Hola! Soy ${nombre}.`
)

const element2 = React.createElement(
  'div',
  {},
  React.createElement(
    'h1',
    {},
    'Hola, soy Harold'
  ),
  React.createElement(
    'p',
    {},
    'Soy desarrollador Frontend'
  )
)

const jsx = <h1>Hello, yo soy {nombre}</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element2, container);
