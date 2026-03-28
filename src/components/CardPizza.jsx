const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>

        <p className="fw-bold mb-1">Ingredientes:</p>

        <ul className="list-unstyled">
          {ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <p className="fw-bold">
          ${price.toLocaleString("es-CL")}
        </p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark btn-sm">
            Ver más 
          </button>
          <button className="btn btn-dark btn-sm">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;