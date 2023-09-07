import styled from 'styled-components'

export const DashboardBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    }
`;
export const ShopDesignsContainer = styled.div`
    margin: 1rem;
    @media (max-width: 768px) {
        margin: 0rem;
        display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    }
`;
export const WelcomeTitle = styled.h1`
    margin: 2rem 0rem 0rem 3rem;
    font-size: 3rem;
    @media (max-width: 768px) {
        margin: 1rem 0rem 0rem 1rem;
    }
`;
export const DateOpened = styled.h3`
    margin: 1rem 0rem 0rem 3rem;
    @media (max-width: 768px) {
        margin: 1rem 0rem 0rem 1rem;
    }
`;

export const ProductNumber = styled.h2`
    margin: 3rem 0rem 0rem 3rem;
    @media (max-width: 768px) {
        margin: 1rem 0rem 0rem 1rem;
    }
`;
