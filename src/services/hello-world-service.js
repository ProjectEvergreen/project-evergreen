class HelloWorldService {
  
  constructor() {
    console.debug('Creating new instance of Hello World Service'); // eslint-disable-line
  }

  sayHello(name = '') {
    const message = name === '' ? 'World' : name;

    console.log(`Hello ${message}!`); // eslint-disable-line
  }

}

export default HelloWorldService;