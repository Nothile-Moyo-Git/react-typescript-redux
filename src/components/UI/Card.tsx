import './Card.scss';

const Card = (props : any) => {
  return <li className={`card ${props.className}`} style={props.style}>{props.children}</li>;
};

export default Card;
