import React from 'react'
import { io } from "socket.io-client"

class TicTacToe extends React.Component {

 componentDidMount() {

  const socket = io("ws://localhost:3000");
  this.state.socket=socket;
  socket.on("connect", ()=>{
   console.log("Conexion exitosa", socket.id)
  })

 socket.on("valorJugador", (data)=>{
   this.state.textMio=data.xOo;
  console.log(this.state.textMio)
  })

  socket.emit("message", "Servidor echo")
  socket.on("Server:message", (data)=>{
   console.log(data.name)
  })

  socket.on("asigEspacio", (data)=>{
   console.log(data.esp)
   this.verificarTurno(this.state.textRival);
   this.asignation(data.esp);
  })

  socket.on("asigValorEspacio", (data)=>{
   console.log(data.vesp)
   this.state.textRival=data.vesp;
  })


 }


 constructor(props) {
  super(props);
  this.state = {
   socket:'',
   b1: 'b1',
   b2: 'b2',
   b3: 'b3',
   b4: 'b4',
   b5: 'b5',
   b6: 'b6',
   b7: 'b7',
   b8: 'b8',
   b9: 'b9',
   c1: '',
   c2: '',
   c3: '',
   c4: '',
   c5: '',
   c6: '',
   c7: '',
   c8: '',
   c9: '',
   con: 0,
   textMio: '',
   textRival:'',
  }


 }

verificarTurno(text){

   if(text==this.state.textMio){
    document.getElementById('b11').disabled=true;
    document.getElementById('b12').disabled=true;
    document.getElementById('b13').disabled=true;
    document.getElementById('b21').disabled=true;
    document.getElementById('b22').disabled=true;
    document.getElementById('b23').disabled=true;
    document.getElementById('b31').disabled=true;
    document.getElementById('b32').disabled=true;
    document.getElementById('b33').disabled=true;
   }
   else{
    document.getElementById('b11').disabled=false;
    document.getElementById('b12').disabled=false;
    document.getElementById('b13').disabled=false;
    document.getElementById('b21').disabled=false;
    document.getElementById('b22').disabled=false;
    document.getElementById('b23').disabled=false;
    document.getElementById('b31').disabled=false;
    document.getElementById('b32').disabled=false;
    document.getElementById('b33').disabled=false;


   }
 //  this.asignation(text, boton);
 }

 asig(boton,e){
  this.state.socket.emit("valorEspacio", {v:this.state.textMio})
  this.state.socket.emit("espacio", {b:boton})
 }
 asignation(lugar, e){
  if(lugar=="b1"){
 this.state.b1=this.state.textRival;
   this.setState({
    c1:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b2"){
   this.state.b2=this.state.textRival;

   this.setState({
    c2:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b3"){
   this.state.b3=this.state.textRival;
   this.setState({
    c3:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b4"){
   this.state.b4=this.state.textRival;
   this.setState({
    c4:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b5"){
   this.state.b5=this.state.textRival;
   this.setState({
    c5:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b6"){
   this.state.b6=this.state.textRival;
   this.setState({
    c6:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b7"){
   this.state.b7=this.state.textRival
   this.setState({
    c7:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b8") {
   this.state.b8=this.state.textRival;
   this.setState({
    c8:this.state.textRival
   })
   this.validation(this.state.textRival);

  }
  else if(lugar=="b9"){
   this.state.b9=this.state.textRival;
   this.setState({
    c9:this.state.textRival
   })
   this.validation(this.state.textRival);

  }

 }


validation(text, e){
 console.log("validando");
 console.log(this.state.b1 +this.state.b2 + this.state.b3 + this.state.b4 + this.state.b5 + this.state.b6 + this.state.b7 + this.state.b8+ this.state.b9 );
if((this.state.b1==this.state.b2 && this.state.b2==this.state.b3 )||(this.state.b1==this.state.b5 && this.state.b5==this.state.b9)||(this.state.b3==this.state.b5 && this.state.b5==this.state.b7 )||(this.state.b4==this.state.b5 && this.state.b5==this.state.b6)||(this.state.b7==this.state.b8 && this.state.b8==this.state.b9 )||(this.state.b1==this.state.b4 && this.state.b4==this.state.b7 ) ||(this.state.b2==this.state.b5 && this.state.b5==this.state.b8)||(this.state.b3==this.state.b6 && this.state.b6==this.state.b9)){
  /* var con=confirm(text+" Es el Ganador!!!\nQuieres jugar otra ves?");
   if(con==true){
    window.location.reload();
   }*/
 if(text==this.state.textMio){
  alert("Ganaste");
 }
 else {
  alert("Perdiste");
 }

 //alert("Gano  "+text)
 this.setState({
  b1: 'b1',
  b2: 'b2',
  b3: 'b3',
  b4: 'b4',
  b5: 'b5',
  b6: 'b6',
  b7: 'b7',
  b8: 'b8',
  b9: 'b9',
  c1: '',
  c2: '',
  c3: '',
  c4: '',
  c5: '',
  c6: '',
  c7: '',
  c8: '',
  c9: ''

 })

  }
 }


 render() {
  return (
      <>
       <div id="body">
        <button id="b11" className="buttons" name="b1" value={this.state.b1} onClick={this.asig.bind(this, 'b1')} >{this.state.c1}</button>
        <button id="b12" className="buttons" name="b2" value={this.state.b2} onClick={this.asig.bind(this, 'b2')} > {this.state.c2} </button>
        <button id="b13" className="buttons" name="b3" value={this.state.b3} onClick={this.asig.bind(this, 'b3')} >{this.state.c3}</button>
        <button id="b21" className="buttons" name="b4" value={this.state.b4} onClick={this.asig.bind(this, 'b4')} >{this.state.c4}</button>
        <button id="b22" className="buttons" name="b5" value={this.state.b5} onClick={this.asig.bind(this, 'b5')}>{this.state.c5}</button>
        <button id="b23" className="buttons" name="b6" value={this.state.b6} onClick={this.asig.bind(this, 'b6')}>{this.state.c6}</button>
        <button id="b31" className="buttons" name="b7" value={this.state.b7} onClick={this.asig.bind(this, 'b7')}>{this.state.c7}</button>
        <button id="b32" className="buttons" name="b8" value={this.state.b8} onClick={this.asig.bind(this, 'b8')} >{this.state.c8}</button>
        <button id="b33" className="buttons" name="b9" value={this.state.b9} onClick={this.asig.bind(this, 'b9')}>{this.state.c9}</button>
       </div>

      </>
  )
 }




}
export default TicTacToe;