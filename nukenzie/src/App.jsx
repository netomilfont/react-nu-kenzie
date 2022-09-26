import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
};

export default App;
