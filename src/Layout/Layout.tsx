import { Outlet } from "react-router"
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer.tsx'

const Layout = () => {
    return (
        <div className='relative max-w-[1800px] mx-auto'>
            <Header />
            <div className='pb-14'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout