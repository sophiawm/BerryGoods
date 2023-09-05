import React from 'react';
import { AddProductButtonWrapper } from '../styles/Buttons.styled';

const AddProductButton = ({ onClick }) => {
  return (
    <AddProductButtonWrapper onClick={onClick}>
      ADD PRODUCT
    </AddProductButtonWrapper>
  );
};

export default AddProductButton;