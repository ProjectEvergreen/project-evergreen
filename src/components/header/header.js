import { html, render } from 'lit-html';
import css from './header.css';

class Header extends HTMLElement {
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
      <header>This is the custom Header element</header>
    `;
  }
}

customElements.define('tgh-header', Header);