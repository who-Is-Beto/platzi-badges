/* const element = document.createElement('h1');
element.innerText = 'Hola mundo desde JS';

const container = document.getElementById('app');
container.appendChild(element);
*/

/* USANDO REACT */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
/* //const element = <h1>Hello world from react</h1>
const platzi = `https://platzi.com`;
//const element = React.createElement('h1', {}, 'Hola soy children de React create element');
const jsx = <a href={platzi}>ir a platzi</a>;
const saludo = <div>
  <h1>Hola mundo</h1>
  <p>Soy beto cortés</p>
</div>
//ReactDOM.render(__QUÉ, __DONDE);
ReactDOM.render(jsx, container); */
const container = document.getElementById('app');
ReactDOM.render(<App />, container);
