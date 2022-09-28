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
import NoCard from "./components/NoCard";
import { useEffect } from "react";

const App = () => {
  const [cards, setCards] = useState([]);
  const [auth, setAuth] = useState(true);
  const [cardsRender, setCardsRender] = useState([]);

  useEffect(() => {
    setCardsRender(cards);
  }, [cards]);

  function filterCategory(type) {
    if (type === "Todos") {
      setCardsRender(cards);
    } else {
      const filterResult = cards.filter((element) => element.type === type);
      setCardsRender(filterResult);
    }
  }

  function removeTransaction(clickedCard) {
    console.log(clickedCard);
    const newCardsList = cards.filter((element) => element !== clickedCard);
    console.log(newCardsList);
    setCards(newCardsList);
  }

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
              {cards.length === 0 ? <div></div> : <Total total={cards} />}
            </div>
            <div className="container__list">
              <div className="container__filter">
                <div className="container__allFilter">
                  <TextResume />
                  <div className="container__buttonFilter">
                    <Button
                      name={"Todos"}
                      onClick={() => filterCategory("Todos")}
                    />
                    <Button
                      name={"Entradas"}
                      onClick={() => filterCategory("Entrada")}
                    />
                    <Button
                      name={"Despesas"}
                      onClick={() => filterCategory("Despesa")}
                    />
                  </div>
                </div>
                <div className="container__listCard">
                  {cardsRender.length === 0 ? (
                    <>
                      <h3>Você ainda não possui nenhum lançamento</h3>
                      <NoCard />
                    </>
                  ) : (
                    <Cards
                      transations={cardsRender}
                      removeCard={removeTransaction}
                    />
                  )}
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
