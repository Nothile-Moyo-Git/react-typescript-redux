import './Card.scss';

const Card = (props : any) => {
  return <div className="card" style={props.style}>{props.children}</div>;
};

export default Card;
