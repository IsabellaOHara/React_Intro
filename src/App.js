import logo from './logo.svg';
import './App.css';


import Element from "./components/helloWorld.jsx"
import NameAddress from "./components/NameAddress/nameaddress.jsx"
import Header from "./components/Header_Footer/header.jsx"
import Footer from './components/Header_Footer/footer.jsx';

function App() {
  //only returns 1 div/item with children inside
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
      <Element></Element>
      <NameAddress></NameAddress>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
