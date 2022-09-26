import "./styles.css";
import { useState } from "react";

const Form = ({ setCards }) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setCards((prevCards) => [...prevCards, { description, price, type }]);
    setDescription("");
    setPrice("");
    setType("");
  }

  return (
    <div className="container__form">
      <form onSubmit={handleSubmit}>
        <div className="container__description">
          <label htmlFor="inputDescription">Descrição</label>
          <input
            type="text"
            id="inputDescription"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="container__valor">
          <div>
            <label htmlFor="inputValor">Valor</label>
            <input
              type="number"
              name="inputValor"
              id="inputValor"
              placeholder="1"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="selectType">Tipo de valor</label>
            <select
              name=""
              id="selectType"
              value={type}
              onChange={(event) => setType(event.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;
