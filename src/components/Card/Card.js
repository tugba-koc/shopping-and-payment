import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/amount/amountSlice';
import "./styled.scss"

function Card({ item, index }) {
  const dispatch = useDispatch();

  const divEl = useRef(null);

  const changeToSelected = (id, name, amount) => {
    if (divEl.current.classList.contains("selected")) {
      divEl.current.classList.remove("selected");
      dispatch(removeFromCart({ id: id, amount: amount }));
    } else {
      divEl.current.classList.add("selected");
      dispatch(addToCart({ id, name, amount }));
    };

  }

  return (
    <div ref={divEl} onClick={() => changeToSelected(item.id, item.name, item.amount)} className="main-package-card" key={index}>

      <img className="package-card-image" src={item.imagePath} alt="package-image" />

      <div className="package-card--general-info">
        <div className="package-card-info">
          <h3 className="package-card-title">{item.name}</h3>
          <h3 className="package-card-title amount">
            {item.amount}{item.currency}
          </h3>
        </div>
        <ul className="package-card-detail">
          {item.details.map(el => (
            <>
              <li>{el}</li>
            </>
          ))}
        </ul>
        <ul className="package-card-detail tag">
          {item.tags.map(el => (
            <>
              <li>{el}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card