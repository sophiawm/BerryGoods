import '../../styles/reset.css'
import '../../styles/Dashboard.css'
import ProductGallery from '../../components/ProductGallery.jsx'
import Footer from '../../components/Footer';
import Navbar from '../../components/Header';
import { useLoaderData} from 'react-router-dom'

function Dashboard() {
    let products = useLoaderData()

    return (
        <>
        <Navbar /> 
        <ProductGallery products={products} />
        <Footer />
        </>
    )
}

export default Dashboard