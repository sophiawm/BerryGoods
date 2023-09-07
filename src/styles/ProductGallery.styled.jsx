import styled from 'styled-components';


export const ContainerSingleProductGallery = styled.div`
    font-family: 'Quicksand';
    border-radius: 0.5rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    width: 20vw;
    margin: 2rem 1rem;
    box-shadow: 0px 4px 0px #000;
    @media (max-width: 768px) {
        width: 80vw;
        margin: 1rem 0rem;
    }
`;
export const ProductImage = styled.img`
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    overflow: hidden;
    background-color: #F3B605;
`;
export const ContainerProductDetails = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    margin: 2rem 1.5rem;
    @media (max-width: 768px) {
        margin: 2rem 1rem 1rem;
        justify-content: space-between;
    }
`;
export const ProductName = styled.h3 `
    color: #6134C2;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.03rem;
`;
export const ProductCategory = styled.p `
    @media (min-width: 768px) {
        border-radius: 0.5rem;
        background: #CEBCC3;
        padding: 0.4rem 0.8rem;
        color: #6134C2;
        text-align: center;
        font-size: 0.7rem;
        font-weight: 600;
    }
        @media (max-width: 768px) {
            display: none;
    }
`;
export const ProductPrice = styled.p `
    color: #6134C2;
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0rem 1.5rem 4rem;
    @media (max-width: 768px) {
        margin: 0rem 1rem 4rem;
    }
`;
export const ContainerProductButtons = styled.div `
    display: inline-flex;
    justify-content: space-between;
`;
export const ButtonDetails = styled.button `
    color: #F3B605;
    background-color:#6134C2;
    font-family: 'Quicksand';
    text-align: center;
    font-size: 0.8rem;
    border-radius: 10px;
    height: fit-content;
    padding: 0.6rem 1rem;
    border: none;
    box-shadow: 0px 4px 0px #000;
    margin: 0rem 1.5rem 2rem;
    @media (max-width: 768px) {
        margin: 0rem 1rem 2rem;
    }
`;
export const ContainerButtonsActions = styled.div `
    display: inline-flex;
    gap: 0.5rem;
    margin-right: 1.5rem;
    @media (max-width: 768px) {
        margin-right: 1rem;
    }
`;
export const ButtonAction = styled.button `
    background-color: #6134C2;
    box-shadow: 0px 4px 0px #000;
    border: none;
    border-radius: 5px;
    height: 2rem;

`;
export const IconAction = styled.img `
    padding: 0.5rem;
    width: 2rem;
`;