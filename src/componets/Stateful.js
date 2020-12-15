import React, { Component } from "react";

//aqui estarán: Parte de la lógica.
//Ciclo de vida, estados, eventos
//Render tendremos nuestro HTML retorna nuestro HTML

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hola mundo",
    };
  }
  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export default Stateful;
