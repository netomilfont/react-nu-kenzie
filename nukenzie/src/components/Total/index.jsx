import "./styles.css";

const Total = ({ total }) => {
  const entradas = total.filter((element) => element.type === "Entrada");
  const despesas = total.filter((element) => element.type === "Despesa");

  let priceTotal = entradas.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  let despesasTotal = despesas.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  let totalTransacoes = priceTotal - despesasTotal;

  return (
    <div className="container__total">
      <div className="container__totalDespesas">
        <div className="container__priceTotal">
          <h3>Valor total:</h3>
          <span>{`R$ ${totalTransacoes},00`}</span>
        </div>
        <div>
          <p>O valor se refere ao saldo</p>
        </div>
      </div>
    </div>
  );
};

export default Total;
