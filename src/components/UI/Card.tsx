/**
 * Card component, uses react-parallax-tilt to list product items
 * The inline styling is used for setting custom margins and also setting an animation delay on the gradient effect
 * 
 * @param props 
 * @returns jsx
 */

import './Card.scss';
import Tilt from "react-parallax-tilt";

const Card = (props : any) => {

  return(
    <Tilt 
      className={`card ${props.className}`}
      style={props.style}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glarePosition="all"
      glareColor={"#ff2058"}
      glareBorderRadius={"90"}
>
      {props.children}
    </Tilt>
  );
};

export default Card;
