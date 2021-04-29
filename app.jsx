import React from "react";
import ReactDOM from "react-dom";

class Titles extends React.Component{

render(){
  return(
    <div className="container-fluid a0">
    	<div className="row">
    		<div className="col-md-12">
    			<div className="row">
            <div className="col-md-2">
            </div>
    				<div className="col-md-4">
              <div className = "topleft">
              <h4>Dane wystawiającego:</h4>
              <form>
                <input type ="text" className = "dane1" defaultValue = {"Budimex Krzysztof Polski"} />
                <input type ="text" className = "dane1" defaultValue = {"ul. Olszewskiego 11/5, 52-639 Wrocław"} />
                <input type ="text" className = "dane1" defaultValue = {"NIP: 348-188-45-93  REGON: 950483755"} />
              </form>
            </div>
    				</div>
    				<div className="col-md-4">
              <div className = "topright">
              <h4>Data i miejsce:</h4>
              <form>
                <input type ="text" className = "dane1" defaultValue = {"Wrocław"} />
                <span className = "a11">Data: </span> <input type ="date" className = "dane1" defaultValue = {"12.08.2021"} />
                <span className = "a11">Faktura nr :</span> <input type ="number" className = "dane4" defaultValue = {"1"} />
                <input type ="number" className = "dane4" defaultValue = {"2021"} />
              </form>
            </div>
    				</div>
            <div className="col-md-2">
            </div>
    			</div>
    		</div>
    	</div>
    </div>

  );
}

}


class Top extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-4">
              <div className = "middle">
              <h4>Dane nabywcy:</h4>
              <form>
                <input type ="text" className = "dane1" defaultValue = {"Polskie Ministerstwo Infrastruktury"} />
                <input type ="text" className = "dane1" defaultValue = {"al. Jerozolimskie 126, 16-190 Warszawa "} />
              </form>
              <input className = "input1" type= "text" defaultValue = "kwota słownie" /> zł
              </div>
              </div>
              <div className="col-md-4">
              <Segment />
              </div>
              <div className="col-md-2">
              </div>
              </div>
              </div>

    );
  }

}

class Segment extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: []
    };
  }
  addChild() {
    let data = this.state.data.push( <Multi key = {this.state.data} multi = {this.props.x} /> );
    this.setState({
      data: this.state.data
    });

}
removeChild() {
  let data = this.state.data.pop( <Multi key = {this.state.data} multi = {this.props.x} /> );
  this.setState({
    data: this.state.data
  });

}
  render(){
    return(
      <div className="container-fluid a1">
        <div className="row">
          <div className="col-md-12">
          <div className = "head1">Jednostki</div><div className = "head1">Cena</div><div className = "head1">Ilość</div>
          <br />
              {this.state.data}
              <button className="btn btn-success" onClick = {this.addChild.bind(this)} type="submit">Dodaj wiersz</button>
              <button className="btn btn-success" onClick = {this.removeChild.bind(this)} type="submit">Usuń wiersz</button>
              </div>

      </div>
      </div>
    );
  }
}

class Multi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstValue: 0,
      secondValue: 0,
      sum: 0
    };
    this.myChangeHandler1 = this.myChangeHandler1.bind(this);
    this.myChangeHandler2 = this.myChangeHandler2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  myChangeHandler1 = (event) => {
    event.preventDefault();
    this.setState({firstValue: event.target.value});
  }
  myChangeHandler2 = (event) => {
    event.preventDefault();
    this.setState({secondValue: event.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    const val1 = this.state.firstValue;
    const val2 = this.state.secondValue;
    this.setState({sum: val1 * val2,
    isButtonDisabled: true
    });
  }


    render(){

      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-group">
                 <input className="input-group-field" type="text" defaultValue = "godziny" />
                 <input className="input-group-field" type="text" onChange={this.myChangeHandler1} />
                   <input className="input-group-field" type="text" onChange={this.myChangeHandler2} />
                    <div className="input-group-button">
                    <button className="button" type="submit" onClick = {this.onSubmit} disabled={this.state.isButtonDisabled}>Submit</button>
                  </div>

                </div>
              </form>
              <h5>{this.state.sum}</h5>
              <Summary sum = {this.state.sum} />
              </div>
              </div>
          </div>
      );
    }

}

let sum2 = [];
let reducer;
const Summary = ({ sum }) => (

      <h5>
        Suma:
      {
        sum2.push(sum),
        reducer = (accumulator, currentValue) => accumulator + currentValue,
        sum2.reduce(reducer) + ' ' + 'zł'
         }
               
       </h5>
)

class Print extends React.Component{
  constructor(props){
    super(props);
  }
 addPrint = (event) =>{
    window.print();
}
render(){
  return(
      <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-4">
              <div className = "middle2">
              <button type = 'submit' className= "btn btn-success" onClick ={this.addPrint}>DRUKUJ</button>
              </div>
              </div>
              <div className="col-md-4">
              </div>
              <div className="col-md-2">
              </div>
              </div>
              </div>

  );
}
}

class App extends React.Component{
constructor(props){
  super(props);

}
render(){
  return(
    <div>
      <Titles />
      <Top />
      <Print />
    </div>
  );
}
}
document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.render(
    <div>
    <App />
    </div>,
    document.getElementById('app')

   );
});
