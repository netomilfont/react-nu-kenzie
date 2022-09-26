import "./styles.css";

const Form = () => {
  return (
    <div className="container__form">
      <form>
        <div className="container__description">
          <label htmlFor="inputDescription">Descrição</label>
          <input
            type="text"
            id="inputDescription"
            placeholder="Digite aqui sua descrição"
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
            />
          </div>
          <div>
            <label htmlFor="selectType">Tipo de valor</label>
            <select name="" id="selectType">
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
