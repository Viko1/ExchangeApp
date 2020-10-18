import React from 'react';
import './App.css';
import Currency from "./Currency";

function App() {
  return (
    <div className="App">
        <h1 className='App__name'>
          Follow today's currency
        </h1>
       <Currency/>
       <h1 className='App__name'>
       </h1>
    </div>
  );
}

export default App;
