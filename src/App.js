import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component{
  constructor(){
    super()
     this.state ={
       fullName:'Naruto Uzumaki',
       imgSrc:'naruto.jpg',
       bio:'Né le 10 october 1990,il est un ninja est le hokage du village caché de Konoha.',
       profession:'Ninja,Hokage',
       show:1,
       time:0,
       styleContainer:{backgroundColor: "#E0FFFF"}}
     }
updatetime=()=>{
   this.setState(prevState=>{return {time:prevState.time+1} })
}
componentDidMount(){
   setInterval(() => this.updatetime(),1000);
}
handleChange=()=>{
  if(this.state.show){
this.setState({
  styleContainer:{display:"none"},
show:false})
  }else{
this.setState({
  styleContainer:{
backgroundColor: "#E0FFFF"},
  show:true}
)
}
}
render(){
  return (
<React.Fragment>
  <div className='Card'>
  <div style={this.state.styleContainer}>
  <h2 className='name'>{this.state.fullName}</h2>
  <img width ='250px' style={{borderRadius:"7px"}} src={this.state.imgSrc}/>
  <h5><h3 className='bio'>Bio</h3>{this.state.bio}</h5>
  <h5><h3 className='pro'>Profession</h3>{this.state.profession}</h5> <br />
  <p>Naruto is here since: {this.state.time}s</p>
  </div>
  </div>
  <div className='btn'>
  <Button onClick={this.handleChange} variant="warning">Click!</Button>
  </div>
</React.Fragment>
);
}
}
export default App;
