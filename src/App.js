import React from 'react';
import './App.css';

// function HelloWord(props){
//   console.log(props)
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   );
// }
class HelloWord extends React.Component {
  state = {
    show :true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render () {
    if(this.state.show) {
    return  (
      <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}>Toggle</button>
      </div>
    );
    }else {
      return <h1>
        There's nothing here
        <button onClick={this.toggleShow}>Toggle</button>
        </h1>
    }
  }
}

// const App = () => <div>Un component mas: <HelloWord/></div>;

// class App extends React.Component{
//   render(){
//     return <div>This is classComnponent: <HelloWord/></div>
//   }
// }

function App() {
  
    return (
    <div>
      This's a Component! <HelloWord mytext="Hello Krish!" subtitle="CursoReact"/>
      <HelloWord mytext="Hello my friend!"/>
      <HelloWord mytext="Hello!"/>
      <HelloWord mytext="Hello Krish!"/>
      </div>
);
}

export default App;
