import { AddProductButtonWrapper, ButtonsContainer, EditStoreButtonWrapper} from '../styles/Buttons.styled';

function MainButtons () {
  return ( 
    <>
    <ButtonsContainer>
        <AddProductButtonWrapper>ADD PRODUCT</AddProductButtonWrapper>
        <EditStoreButtonWrapper>EDIT STORE</EditStoreButtonWrapper>
    </ButtonsContainer>
    </>
  );
}

export default MainButtons;

