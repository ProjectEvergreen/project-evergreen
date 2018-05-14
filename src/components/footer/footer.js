import { html, render } from 'lit-html';
import css from './footer.css';

class Footer extends HTMLElement {
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
      
      <footer>
        <a href="https://www.thegreenhouseio.io">&copy; The Greenhouse.io 2018</a>
      </footer>
    `;
  }
}

customElements.define('tgh-footer', Footer);