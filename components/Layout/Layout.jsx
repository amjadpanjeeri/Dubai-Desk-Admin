import React from 'react'
import Header from './Header/header'
import Loader from './PreLoader/preloader'
import Footer from './Footer/footer'
import SideBar from './SideBar/sidebar'
import TopHeader from './TopHeader/topHeader'
// import DashBoard from './Dashboard/dashboard'
export default function Layout({ children }) {
    return (
        <div>
            <Loader />
            <Header />
            <SideBar />
            <div className="content-wrapper">
                {/* <DashBoard/> */}
                {children}
            </div>
            <Footer />
        </div>
    )
}