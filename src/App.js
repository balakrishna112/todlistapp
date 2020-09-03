import React from 'react';
import List from "./components/list";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
        <h1 className="text-centre">TO DO LIST</h1>
        <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
