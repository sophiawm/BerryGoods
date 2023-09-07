import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  justify-content: center;
  gap: 1.5rem; 
  margin: 1.7rem, 6rem;
  background: none;
`;

export const ImageContainer = styled.div`
  width: 14rem;
  height: 14rem;
  border-radius: 0.5rem;
  padding:1rem;
  background-color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;


