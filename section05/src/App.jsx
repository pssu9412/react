import './App.css'
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

import { useState } from "react";
import Counter from "./components/Counter";
import Bulb from "./components/Bulb";

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

function App(){

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
};

export default App;
