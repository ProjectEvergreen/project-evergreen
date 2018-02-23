class HelloService {
  
  constructor(name = '') {
    this.subject = name === '' ? 'World' : name; 
  }

  sayHello() {
    return `Hello ${this.subject}`;
  }

}

export default HelloService;