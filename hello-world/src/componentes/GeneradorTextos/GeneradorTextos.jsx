import React from "react";

class GeneradorTextos extends React.Component {

  // Inicializacion de variables
  constructor(props){
    super(props);
    this.state = {letter:""};
  }
  // Etapa de creacion de funciones
  addLetter(eventLetter) {

    this.setState({letter: eventLetter})
  }
  
  // Etapa de render
  render(){
    return(
      <>
        <h1>{this.state.letter}</h1>
        <input type="text" onChange={(evento)=> this.addLetter(evento.target.value)}/>
      </>
    )
  }
}

export default GeneradorTextos;