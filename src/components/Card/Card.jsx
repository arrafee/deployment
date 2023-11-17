const Card = ({
  no,
  name,
  category,
  image,
  freshness,
  additionalDescription,
  price,
}) => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">{no}</div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Image : {image}</p>
          <small>{category}</small>
          <p className="card-text">{additionalDescription}</p>
          <p>{freshness}</p>
        </div>
        <div className="card-footer text-body-secondary">${price}</div>
      </div>
    </>
  );
};

export default Card;
