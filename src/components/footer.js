import { html, render } from 'lit-html';

class Footer extends HTMLElement {
  constructor() {
    super();
    
    this.root = this.attachShadow({ mode: 'open' }); // TODO what is this API? 
    render(this.template(), this.root);
  }

  template() {
    return html`
      <footer>This is the custom Footer element</footer>
    `;
  }
}

customElements.define('tgh-footer', Footer);