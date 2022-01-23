import React from "react";
import { selectProduct, unselectProduct } from "../redux/actions/products";
import { useSelector, useDispatch } from "react-redux";
import { isSelected } from "../redux/selectors";
import styled from "styled-components";

const Title = styled.h1`
  color: black;
`;
const Container = styled.div`
  background: #d8ccaa;
  display: flex;
  flex-direction: column;
  margin: 5px;
  border-radius: 10px;
  width: 40%;
  margin-top: 15px;
`;

const Description = styled.p`
  color: red;
`;

const ActionButton = styled.button`
  width: 100px;
  margin: 0 5px;
  padding: 8px 14px;
  background: grey;
  color: white;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

const Product = (props) => {
  const { id, name } = props.product;

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
    <Container>
      <Title>{name}</Title>
      <Description> {selected ? "is selected" : "is not selected"}</Description>
      <div style={{ marginBottom: "15px" }}>
        <ActionButton onClick={select}>Select</ActionButton>
        <ActionButton onClick={unselect}>Unselect</ActionButton>
      </div>
    </Container>
  );
};
export default Product;
