import propTypes from "prop-types";
import React from "react";

export const Card = (props) => {
    return (
        <><div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Gender: {props.gender}<br /> Hair Color: {props.haircolor}<br/> Eye Color: {props.eyecolor} </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></>
    )
}