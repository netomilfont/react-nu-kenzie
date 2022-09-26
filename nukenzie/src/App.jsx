import { useState } from "react";

import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Form from "./components/Form";
import TextResume from "./components/TextResume";
import Button from "./components/Button";
import ImgInicio from "./img/illustration.png";
import LogoInicio from "./img/NuKenzieInicio.png";
import Total from "./components/Total";

const App = () => {
  const [cards, setCards] = useState([]);
  const [auth, setAuth] = useState(true);

  return (
    <>
      {auth ? (
        <div className="container__Inicio">
          <section className="container__infoApp">
            <img src={LogoInicio} alt="" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button onClick={() => setAuth(!auth)}>Entrar</button>
          </section>
          <section className="container__imgApp">
            <img src={ImgInicio} alt="" />
          </section>
        </div>
      ) : (
        <div className="container">
          <header>
            <div className="container__header">
              <Header />
              <button onClick={() => setAuth(!auth)}>Inicio</button>
            </div>
          </header>
          <div className="container__main">
            <div>
              <Form setCards={setCards} />
              <Total total={cards} />
            </div>
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
      )}
    </>
  );
};

export default App;
