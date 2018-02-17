import { html, render } from 'lit-html';
import HelloService from '../../services/hello-service';
import css from './home.css';

class Home extends HTMLElement {
  constructor() {
    super();

    const helloService = new HelloService();
    
    this.message = helloService.sayHello('Owen');

    this.root = this.attachShadow({ mode: 'closed' });
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