import React from "react";
import './Card.css'

const Card = ({data}) => {
  const {title, subTitle, preText, listItems, socialLinks, rate} = data;
  return (
    <div className='card'>
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
      <div className="preText">{preText}</div>
      <div className="listItems">
        <ul>
          {listItems.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
      <div className="socialLinks">{socialLinks}</div>
      <div className="rate">{rate}</div>
    </div>
  );
};

export default Card;
