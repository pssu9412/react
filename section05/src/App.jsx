import './App.css'
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

/*
function App() {

  const buttonProps ={
    text: "카페",
    color: "blue",
    a: 1,
    b: 2,
  }
  return (
    <>
    <Header />
    <Button text={"메일"} color={"red"}/>
    <Button {...buttonProps} />
    <Button text={"블로그"}>
      <div>자식요소</div>
    </Button>
    <Footer />
    </>
  );
};
*/

import { useState } from "react";
/*
import Counter from "./components/Counter";
import Bulb from "./components/Bulb";

function App(){

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
};
*/

import Register from "./components/Register";
import HookExam from './components/Hook';

function App(){
  return (
    <>
      {/* <Register /> */}
      <HookExam />
    </>
  )
}
export default App;