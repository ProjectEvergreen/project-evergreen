class HelloService {
  
  constructor() {
    console.debug('Creating new instance of Hello World Service'); // eslint-disable-line
  }

  sayHello(name = '') {
    const subject = name === '' ? 'World' : name;

    return `Hello ${subject}!`;
  }

}

export default HelloService;