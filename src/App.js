import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Section from "./component/Section";
import Footer from "./component/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  const actionMethod = (event) => {
    console.log(event.target, "------------");
    if (event.target.innerText === "Add to cart") {
      AddToCart(event);
    } else {
      RemoveCart(event);
    }
  };

  const AddToCart = (event) => {
    setCount(() => count + 1);
    event.target.innerText = "Remove from cart";
    event.target.classList.value = "btn btn-danger";
  };
  const RemoveCart = (event) => {
    setCount(() => count - 1);
    event.target.innerText = "Add to cart";
    event.target.classList.value = "btn btn-dark";
  };
  return (
    <>
      <Navbar count={count} />
      <Header />
      <Section actionMethod={actionMethod} />
      <Footer />
    </>
  );
};

export default App;
