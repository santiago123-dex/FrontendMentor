import "../styles/cards.css";
import icon from "../img/icon.png";

export function Cards() {
  return (
    <div className="box-card">
      <div className="box-card-content">
        <img src={icon} alt="icono" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt iure
          asperiores aut atque nisi sapiente rem similique repudiandae.
        </p>
      </div>
    </div>
  );
}