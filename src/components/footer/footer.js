import { html, render } from 'lit-html';
import css from './footer.css';

class Footer extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'open' });
    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>
      
      <footer>This is the custom Footer element</footer>
    `;
  }
}

customElements.define('tgh-footer', Footer);