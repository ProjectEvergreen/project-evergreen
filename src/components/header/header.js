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
      
      <header class="header">        

        <h2 class="header-text">The Greenhouse</h2>
        
        <div class="header-banner"></div>
        
        <p class="io-text">.io</p>
    
      </header>
    `;
  }
}

customElements.define('tgh-header', Header);