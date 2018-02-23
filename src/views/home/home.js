import { html, render } from 'lit-html';
import HelloService from '../../services/hello-service';
import GithubApi from '../../services/github-api';
import '../../components/repositories-list/repositories-list';
import css from './home.css';
// import viewHtml from './home.html';

class Home extends HTMLElement {
  constructor() {
    super();

    const helloService = new HelloService('Owen');
    
    this.message = helloService.sayHello('Owen');
    this.repositories = [];
    this.root = this.attachShadow({ mode: 'closed' });
    
    render(this.template(), this.root);

    GithubApi.getPublicRepositories().then(response => {
      const repos = JSON.stringify(response);

      this.root.querySelector('tgh-repositories-list').setAttribute('repositories', repos);
    });
  }

  template() {
    return html`
      <style>
        ${css}
      </style>

      <div>
        
        <h2 class="welcome-text-heading">Welcome to The Open Webapp Seed project!</h2>
        
        <p class="welcome-text-body">
          ${this.message}! This is a sample project to demonstrate a basic Open Webapp implementati  on. We hope you like it!</p>
        </p>
        
        <tgh-repositories-list class="repositories-list" repositories=></tgh-repositories-list>
      
      </div>
    `;
  }
}

customElements.define('tgh-home', Home);