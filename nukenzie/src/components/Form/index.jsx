const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="inputDescription">Descrição</label>
        <input
          type="text"
          id="inputDescription"
          placeholder="Digite aqui sua descrição"
        />
        <span>Ex: Compra de roupas</span>
        <label htmlFor="inputValor">Valor</label>
        <input
          type="number"
          name="inputValor"
          id="inputValor"
          placeholder="1"
        />
        <label htmlFor="selectType">Tipo de valor</label>
        <select name="" id="selectType"></select>
        <button type="submit">Inserir valor</button>
      </form>
    </div>
  );
};

export default Form;
