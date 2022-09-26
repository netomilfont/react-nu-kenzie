import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TextResume from "./components/TextResume";
import Button from "./components/Button";
import TitleList from "./components/TitleList";
import NoCard from "./components/NoCard";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="container__main">
          <Form />
          <div className="container__list">
            <div className="container__filter">
              <div className="container__allFilter">
                <TextResume />
                <div className="container__buttonFilter">
                  <Button />
                  <Button />
                  <Button />
                </div>
              </div>
              <div className="container__listCard">
                <TitleList />
                <NoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
