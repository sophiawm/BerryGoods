import styled from 'styled-components';

export const styledContainerProductGallery = styled.div`
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
    border-radius: 0.5rem;
    background-color: #fff;
`;
export const styledProductImage = styled.img`
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    overflow: hidden;
    width: 14.6875rem;
    height: 14.875rem;
`;
export const styledContainerProductDetails = styled.div`
    display: inline-flex;
    justify-content: space-between;
    margin: 1.12rem 0.7rem 0rem;
`;
export const styledProductName = styled.h3 `
    color: #6134C2;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.03rem;
`;
export const styledProductCategory = styled.p `
    @media (min-width: 768px) {
        border-radius: 0.5rem;
        background: #CEBCC3;
        padding: 0.31rem 1.12rem;
        color: #6134C2;
        text-align: center;
        font-size: 0.6875rem;
        font-weight: 600; 
    }
        @media (max-width: 768px) {
            display: none;
    }
`;
export const styledProductPrice = styled.p `
    color: #6134C2;
    margin-bottom: 4rem;
    font-size: 0.6875rem;
    font-weight: 600;
`;
export const styledContainerProductButtons = styled.div `
    display: inline-flex;
    justify-content: space-between;
    margin: 1.12rem 0.7rem 0rem;
`;
export const styledButtonDetails = styled.button `
    color: #F3B605;
    text-align: center;
    font-size: 0.6875rem;
    padding: 0.31rem 0.69rem;
    box-shadow: 0px 4px 0px #000;
`;
export const styledContainerButtonsActions = styled.div `
    display: inline-block;
    gap: 0.31rem;
`;
export const styledButtonAction = styled.button `
    background-color: #6134C2;
    box-shadow: 0px 4px 0px #000;
    width: 1.625rem;
    height: 1.5rem;
`;
export const styledIconAction = styled.img `
    padding: 0.2rem;
    height: auto;
    width: auto;
`;