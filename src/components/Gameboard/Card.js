import "./Card.css";

const Card = (props) => {
  const { id, url, photographer, photographerUrl } = props.data;
  const { order, clickHandler } = props;

  return (
    <div className={"Card showBack"} style={{ "--order": order }}>
      <div className={"CardInner"}>
        <div className="CardFront" onClick={() => clickHandler(id)}>
          <img src={url} alt="" />
          <a
            className="photographerLink"
            href={photographerUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {photographer}
          </a>
        </div>
        <div className="CardBack">
          <img src="#" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
