import "./styles.css";
import ImgTrash from "../../img/ButtonTrash.png";

const Cards = ({ transations, removeCard }) => {
  return (
    <ul>
      {transations.map((card, index) => (
        <li
          key={index}
          className={card.type === "Entrada" ? "card__green" : "card"}
        >
          <div>
            <h3>{card.description}</h3>
            <span>{card.type}</span>
          </div>
          <div className="card__price">
            <p>{`R$ ${card.price},00`}</p>
            <div>
              <img
                src={ImgTrash}
                alt=""
                id={index}
                onClick={() => removeCard(card)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
