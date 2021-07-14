import React from 'react';
import { Link } from "gatsby"
import './cta.css'

const Cta = (props) => {
  return (
    <div className="push">
      <Link className={`${props.size} cta ${props.color}`} to={props.linkTo}>
        {props.buttonText}
      </Link>
    </div>
  );
};

export default Cta;