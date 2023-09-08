import '../../styles/ShopInformation.styled.jsx'
import '../../styles/Dashboard.css'
import { useEffect }  from 'react'
import ProductGallery from '../../components/ProductGallery.jsx'
import Footer from '../../components/Footer';
import Navbar from '../../components/Header';
import MainButtons from '../../components/StoreMainButtons'
import ShopInformationData from '../../components/ShopInformationData.jsx';
import { ContainerProductGallery, DashboardBody, ShopDesignsContainer, WelcomeTitle, DateOpened, ProductNumber } from '../../styles/Dashboard.styled.jsx'
import { useLoaderData} from 'react-router-dom'

function Dashboard() {
    let products = useLoaderData()

    useEffect(() => {
    
    });

    return (
        <>
        <Navbar />
        <DashboardBody>
            <ShopDesignsContainer>
                <WelcomeTitle>Daily Design</WelcomeTitle>
                <DateOpened>Opened since 2019</DateOpened>
                <ProductNumber>Products({products.length})</ProductNumber>
                <ContainerProductGallery>
                <ProductGallery products={products} />
                </ContainerProductGallery>
                <MainButtons />
            </ShopDesignsContainer>
            <ShopInformationData/>
        </DashboardBody>
        <Footer />
        </>
    )
}

export default Dashboard