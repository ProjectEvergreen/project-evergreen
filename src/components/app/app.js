import { html, render } from 'lit-html';
import '../header/header';
import '../footer/footer';
import '../../views/home/home';
import css from './app.css';

// TOOD component MUST be transpiled with native Class syntax intact? need to check browser support
// https://stackoverflow.com/questions/39037489/extending-htmlelement-constructor-fails-when-webpack-was-used
class App extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'closed' });
    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>

      <div id="container">

        <section>
          <tgh-header></tgh-header>
        </section>
        
        <section>
          <tgh-home></tgh-home>
        </section>

        <section>
          <tgh-footer></tgh-footer>
        </section>

      </div>
    `;
  }
}

customElements.define('tgh-app', App);