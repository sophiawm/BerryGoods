import styled from 'styled-components';

export const StyleFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #6134C2;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 7.5rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        height: 9.8125rem;
        gap:1rem;
    }
    .footer-logo{
    width: 6.25rem;
    height: 4.22413rem;
    margin-right: 2rem;
    }
    .footer-calltoaction{
    color: #F8BAD1;
    font-family: 'Quicksand';
    font-size: 1.1875rem;
    font-weight: 600;
    }`;