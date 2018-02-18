import { html, render } from 'lit-html';
import HelloService from '../../services/hello-service';
import css from './home.css';
// import viewHtml from './home.html';

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

      <div>
        
        <h2 class="welcome-text-heading">Welcome to The Open Webapp Seed project!</h2>
        <p class="welcome-text-body">This is a sample project to demonstrate a basic Open Webapp implementation.</p>
    
      </div>
    `;
  }
}

customElements.define('tgh-home', Home);