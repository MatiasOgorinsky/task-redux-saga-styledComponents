import React from "react";
import { selectProduct, unselectProduct } from "../redux/actions/products";
import { useSelector, useDispatch } from "react-redux";
import { isSelected } from "../redux/selectors";

const Product = (props) => {
  const { id, name, inStock } = props.product;

  const selected = useSelector((state) => {
    return isSelected(state, id);
  });

  const dispatch = useDispatch();

  const select = () => {
    dispatch(selectProduct(id));
  };

  const unselect = () => {
    dispatch(unselectProduct(id));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{inStock}</h6>

        {selected ? <p>is selected</p> : <p>is not selected</p>}
        {/* <h6 className="card-subtitle mb-2 text-muted">{props.user.selected}</h6> */}

        <button onClick={select}>select</button>
        <button onClick={unselect}>unselect</button>
      </div>
    </div>
  );
};
export default Product;
