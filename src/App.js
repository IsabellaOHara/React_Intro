import logo from './logo.svg';
import './App.css';

import Element from "./components/helloWorld.jsx"
import NameAddress from "./components/nameaddress.jsx"

function App() {
  //only returns 1 div/item with children inside
  return (
    <div className="App">
      <header className="App-header">
      <Element></Element>
      <NameAddress></NameAddress>
      </header>
    </div>
  );
}

export default App;
