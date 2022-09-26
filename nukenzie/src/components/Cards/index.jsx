import "../styles.css";
import ImgTrash from "../TrashImg";

const Cards = ({ transations }) => {
  return (
    <ul>
      {transations.map((profile, index) => (
        <li key={index} className="card">
          <div>
            <h3>Salário - Mês Dezembro</h3>
            <span>Entrada</span>
          </div>
          <div>
            <p>R$ 6.660,00</p>
            <input type="image" src={ImgTrash} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
