import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="container__main">
          <Form />
        </div>
      </div>
    </>
  );
};

export default App;
