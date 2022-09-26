import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TextResume from "./components/TextResume";
import Button from "./components/Button";
import TitleList from "./components/TitleList";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="container__main">
          <Form />
        </div>
        <div className="container__list">
          <div className="container__filter">
            <TextResume />
            <div className="container__buttonFilter">
              <Button />
              <Button />
              <Button />
            </div>
            <div>
              <TitleList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
