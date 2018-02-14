import { html, render } from 'lit-html';

class Header extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'open' }); // TODO what is this API? 
    render(this.template(), this.root);
  }

  template() {
    return html`
      <header>This is the custom Header element</header>
    `;
  }
}

customElements.define('tgh-header', Header);