import React from "react";

class GeneradorPalabras extends React.Component {

  // Inicializacion de variables
  constructor(props){
    super(props);
    this.state = {letter:""};
  }
  // Etapa de creacion de funciones
  addword(eventLetter) {
    let wordInpunt = document.querySelector(".wordInput");

    this.setState({letter: this.state.letter + " " + wordInpunt.value})
  }
  /*popword(){
    let wordInpunt = document.querySelector(".wordInput");
    let nuevacadena = this.state.letter.replace(wordInpunt.value, " ");
    this.setState({letter: nuevacadena.value});



    //this.setState({letter: this.state.letter + " " + wordInpunt.value})
    
  }*/
  
  // Etapa de render
  render(){
    return(
      <>
        <h1>{this.state.letter}</h1>
        <input type="text" className="wordInput" />
        <input type="button" value="Enviar Palabra" onClick={()=> this.addword() }/>
        <input type="button" value="Quitar Palabra" onClick={()=> this.popword() }/>
      </>
    )
  }
}

export default GeneradorPalabras;