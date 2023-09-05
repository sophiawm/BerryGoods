import React from 'react';
import { EditStoreButtonWrapper } from '../styles/Buttons.styled';

const EditStoreButton = ({ onClick }) => {
  return (
    <EditStoreButtonWrapper onClick={onClick}>
      EDIT STORE
    </EditStoreButtonWrapper>
  );
};

export default EditStoreButton;