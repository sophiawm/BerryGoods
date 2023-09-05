import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  padding: 16px;
  background: white;
  max-width: 50%;
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;


