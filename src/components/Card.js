// import styled from "styled-components";

// import React from "react";
// import { selectProduct, unselectProduct } from "../redux/actions/products";
// import { useSelector, useDispatch } from "react-redux";
// import { isSelected } from "../redux/selectors";

// const Title = styled.h1`
//   color: black;
//   //   font-weight: 300;
// `;
// const Date = styled.div`
//   color: black;
//   font-weight: 300;
//   margin: 6px 0;
// `;
// const Description = styled.p`
//   color: black;
//   font-weight: 300;
// `;

// const ActionButton = styled.button`
//   width: 100px;
//   margin: 0 5px;
//   padding: 8px 14px;
//   background: grey;
//   color: white;
//   cursor: pointer;
//   border: 1px solid #fff;
//   border-radius: 5px;
//   outline: 0;
//   font-weight: 300;
//   :hover {
//     opacity: 0.8;
//   }
// `;

// const Card = (props) => {
//   const { id, name, inStock } = props.user;

//   const selected = useSelector((state) => {
//     return isSelected(state, props.user.id);
//   });

//   const dispatch = useDispatch();

//   const select = () => {
//     dispatch(selectProduct(id));
//   };

//   const unselect = () => {
//     dispatch(unselectProduct(id));
//   };
//   <div style={{ background: "#D8CCAA", display: "flex", flexDirection: "column" }}>
//     <Title>{name}</Title>
//     {/* <Date>3/2/2019</Date> */}
//     <Description> {selected ? "is selected" : "is not selected"}</Description>
//     <div style={{ margin: "5px" }}>
//       <ActionButton onClick={select}>Select</ActionButton>
//       <ActionButton onClick={unselect}>Unselect</ActionButton>
//     </div>
//   </div>;
// };
// export default Card;
