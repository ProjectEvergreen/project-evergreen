import HelloService from './services/hello-service';
import './components/header';
import './components/footer';
import { html, render } from 'lit-html';

// TOOD component MUST be transpiled with native Class syntax intact? need to check browser support
// https://stackoverflow.com/questions/39037489/extending-htmlelement-constructor-fails-when-webpack-was-used
class App extends HTMLElement {
  constructor() {
    super();
    
    const helloService = new HelloService();

    this.root = this.attachShadow({ mode: 'open' }); // TODO what is this API? 
    this.message = helloService.sayHello('Owen');
    
    render(this.template(), this.root);
  }

  template() {
    return html`
      <tgh-header></tgh-header>
        <h1>${this.message}</h1>
      <tgh-footer></tgh-footer>
    `;
  }
}

customElements.define('tgh-app', App);