import React from 'react'
import './App.css';
import Header from './components/Header.tsx'
import Hburg from './components/Hburg.tsx'
import Bp from './components/Bp.tsx'
function App() {
  return ( 
    <div className="App">
        <Header />
        <Hburg />
        <Bp title="Hi" body="This is the body"/>
    </div>
  );
}

export default App;
