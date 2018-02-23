import { html, render } from 'lit-html';
import css from './repositories-list.css';

class RepositoriesList extends HTMLElement {
  constructor() {
    super();
    
    this._repositories = [];
    this.root = this.attachShadow({ mode: 'closed' });
  }

  static get observedAttributes() {
    return ['repositories'];
  }

  attributeChangedCallback(name, oldVal, newVal = []) {
    switch (name) {

      case 'repositories':
        this._repositories = newVal ? JSON.parse(newVal) : [];
        break;

      default:

    }

    render(this.template(), this.root);
  }

  renderRepositoriesListItems() {
    return this._repositories.map((repo) => {
      return html`<li><h3>${repo.name}</h3></li>`;
    });
  }

  template() {
    return html`
      <div>
        <style>
          ${css}
        </style>

        <h1>This is the Repositories List element</h1>
        
        <ol>
          ${this.renderRepositoriesListItems()}
        </ol>
      
      </div>
    `;
  }
}

customElements.define('tgh-repositories-list', RepositoriesList);