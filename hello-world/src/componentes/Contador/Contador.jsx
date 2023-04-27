import React from "react";

class Contador extends React.Component {

  // Inicializacion de variables
  constructor(props){
    super(props);
    this.state = {Cont:0};
  }
  // Etapa de creacion de funciones
  plus(){
    this.setState({Cont:this.state.Cont+1});
  }
  minus(){
    this.setState({Cont:this.state.Cont-1});
  }
  // Etapa de render
  render(){
    return(
      <>
      <h1>CONTADOR: NUMERO {this.state.Cont} </h1>
      <button onClick={()=> this.plus()}>SUMAR</button>
      <button onClick={()=> this.minus()}>RESTAR</button>
      </>
    )
  }
}

export default Contador;
