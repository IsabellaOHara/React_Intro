import './App.css';

import Element from "./components/helloWorld.jsx"
import NameAddress from "./components/NameAddress/nameaddress.jsx"
import Header from "./components/Header_Footer/header.jsx"
import Footer from './components/Header_Footer/footer.jsx';
import Message from './components/message';
import PropComp from './components/Props_Exercises/propsExercise';
import ComponentWithProps from './components/Props_Exercises/componentWithProps';

function App() {
  //only returns 1 div/item with children inside
  return (
    <div className="App">
      <Header></Header>
      <body className="App-body">
      <Element></Element>
      <NameAddress></NameAddress>
      <Message name={"Bella O'Hara"} isGreeting={true}></Message>
      <PropComp></PropComp>
      <ComponentWithProps></ComponentWithProps>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
