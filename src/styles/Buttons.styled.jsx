import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin: 2rem 2rem 4rem;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 1rem;
        width:70vw;
    }
`;

export const AddProductButtonWrapper = styled.button`
  background-color: #F8BAD1;
  color: #6134C2;
  font-family: 'Quicksand';
  padding: 1rem 1.5rem;
  border: none;
  font-size: 1.25rem;
  border-radius: 0.625rem;
  box-shadow: 0px 4px 4px 0px #000;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
export const EditStoreButtonWrapper = styled.button`
  background-color: #F3B605;
  color: #6134C2;
  padding: 1rem 1.5rem;
  font-family: 'Quicksand';
  border: none;
  font-size: 1.25rem;
  border-radius: 0.625rem;
  box-shadow: 0px 4px 4px 0px #000;
  font-weight: 700;
`;