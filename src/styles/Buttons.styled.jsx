import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin: 3rem 0rem 6rem 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: 2rem 0rem;
        width:100vw;
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
    display: block;
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