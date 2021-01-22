import './App.css';
import React from 'react'

function App() {
  // return (
  //   <div className="App">
  //     <h1>HELLO!! </h1>
  //   </div>
  // );
  return React.createElement("div","",React.createElement("h1",{className:'App'},"Create New Element within h1!!!"));
}

export default App;
