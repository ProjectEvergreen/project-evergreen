import { html, render } from 'lit-html';
import HelloService from '../../services/hello-service';
import css from './home.css';

class Home extends HTMLElement {
  constructor() {
    super();
    
    const helloService = new HelloService();

    this.root = this.attachShadow({ mode: 'closed' });
    this.message = helloService.sayHello('Owen');
    
    render(this.template(), this.root);
  }

  template() {
    return html`
      <style>
        ${css}
      </style>

      <h1>${this.message}</h1>
    `;
  }
}

customElements.define('tgh-home', Home);