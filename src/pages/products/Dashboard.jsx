import '../../styles/ShopInformation.styled.jsx'
import '../../styles/Dashboard.css'
import ProductGallery from '../../components/ProductGallery.jsx'
import Footer from '../../components/Footer';
import Navbar from '../../components/Header';
import MainButtons from '../../components/StoreMainButtons'
import ShopInformationData from '../../components/ShopInformationData.jsx';
import { DashboardBody, ShopDesignsContainer, WelcomeTitle, DateOpened, ProductNumber } from '../../styles/Dashboard.styled.jsx'

function Dashboard() {
    return (
        <>
        <Navbar />
        <DashboardBody>
            <ShopDesignsContainer>
                <WelcomeTitle>Daily Design</WelcomeTitle>
                <DateOpened>Opened since 2019</DateOpened>
                <ProductNumber>Products (2)</ProductNumber>
                <ProductGallery />
                <MainButtons />
            </ShopDesignsContainer>
            <ShopInformationData/>
        </DashboardBody>
        <Footer />
        </>
    )
}

export default Dashboard