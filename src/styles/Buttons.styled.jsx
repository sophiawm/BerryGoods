import styled from 'styled-components';

export const AddProductButtonWrapper = styled.button`
  background-color: #F8BAD1;
  color: #6134C2;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 20px;
  box-shadow: 0px 4px 4px 0px #000;
  width: 160px;
  height: 60px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const EditStoreButtonWrapper = styled.button`
  background-color: #F3B605;
  color: #6134C2;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  margin-right: 20px;
  box-shadow: 0px 4px 4px 0px #000;
  width: 160px;
  height: 60px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;