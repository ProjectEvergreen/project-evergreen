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
        <a href="https://www.thegreenhouseio.io">The Greenhouse.io</a>
      </footer>
    `;
  }
}

customElements.define('tgh-footer', Footer);