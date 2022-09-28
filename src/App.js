import './App.css';

import Element from "./components/helloWorld.jsx"
import NameAddress from "./components/NameAddress/nameaddress.jsx"
import Header from "./components/Header_Footer/header.jsx"
import Footer from './components/Header_Footer/footer.jsx';
import Message from './components/message';
import PropComp from './components/Props_Exercises/propsExercise';
import ComponentWithProps from './components/Props_Exercises/componentWithProps';
import Clicker from './components/State/clicker';
import Login from './components/State/login';
import Car from './components/State/car';
import ProductTable from './components/State/search';
import Game from './components/Lifting_State/game';
import AddProduct from './components/Product_Manager/product';

import Clock from './components/Lifecycle/clock';

function App() {
  //only returns 1 div/item with children inside
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
      {/* <Element></Element>
      <NameAddress></NameAddress>
      <Message name={"Bella O'Hara"} isGreeting={true}></Message>
      <PropComp></PropComp>
      <ComponentWithProps></ComponentWithProps>
      <Clicker></Clicker>
      <Login></Login>
      <Car></Car>
      <ProductTable></ProductTable>  */}
      {/* <AddProduct></AddProduct> */}
      <Clock></Clock>
      </header>
      {/* <Footer></Footer>
      <Game></Game> */}
    </div>
  );
}

export default App;
