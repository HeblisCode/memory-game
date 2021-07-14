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
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
