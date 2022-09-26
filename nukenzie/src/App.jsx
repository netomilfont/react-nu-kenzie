import { useState } from "react";

import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Form from "./components/Form";
import TextResume from "./components/TextResume";
import Button from "./components/Button";

const App = () => {
  const [cards, setCards] = useState([]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="container__main">
          <Form setCards={setCards} />
          <div className="container__list">
            <div className="container__filter">
              <div className="container__allFilter">
                <TextResume />
                <div className="container__buttonFilter">
                  <Button name={"Todos"} />
                  <Button name={"Entradas"} />
                  <Button name={"Despesas"} />
                </div>
              </div>
              <div className="container__listCard">
                <Cards transations={cards} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
