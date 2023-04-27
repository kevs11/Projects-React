import React from "react";

class Reloj extends React.Component {

  // Inicializacion de variables
  constructor(props){
    super(props);
    this.dias={
      Mon:"Lunes",
      Tue:"Martess",
      Wed:"Miercoles",
      Thu:"Jueves",
      Fri:"Viernes",
      Sat:"Sabado",
      Sun:"Domingo",
      }
    
    this.meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    this.state= {hour: 0, min: 0, seg: 0, firstTime: true};
  }
  // Etapa de creacion de funciones
  componentDidMount(){
   if(this.state.firstTime){
    let currentDate = new Date();
       this.setState({
       hour:currentDate.getHours(),
       min:currentDate.getMinutes(), 
       seg:currentDate.getSeconds(),
       firstTime: false,
      });
   }
  }
  componentDidUpdate(){ 

    if(this.state.seg >= 60){
      this.setState({min:this.state.min +1, seg: 0 })
      return;
    }
    if(this.state.min >=60 ){
      this.setState({hour:this.state.hour+1, min: 0, seg: 0 })
      return;
    }
    if(this.state.min >= 24){
      this.setState({hour: 0, min: 0, seg: 0 })
      return;
    }
    setTimeout(()=>{
      this.setState({seg:this.state.seg+1})
    }, 1000);
  }
  fechaCompleta(){
    let fecha = new Date();
    let diaStr = this.dias[`${new Date().toDateString().slice(0,3)}`]
    let mesStr = this.meses[fecha.getMonth()]
    let elementoFinal = (
    <h2>
      {diaStr}, {new Date().getDate()} de {mesStr} de {new Date().getFullYear()}
    </h2>)
    return elementoFinal;
  }
    // Etapa de render
  render(){
    return(
      <>
      <h3>Hora Exacta</h3>
      <h1>{`${this.state.hour}:${this.state.min}:${this.state.seg}`}</h1>
      {this.fechaCompleta()}
      </>
    )
  }
}
export default Reloj;