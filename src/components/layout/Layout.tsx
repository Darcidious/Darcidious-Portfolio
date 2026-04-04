import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import EnchantedBackground from '../ui/EnchantedBackground'
import './Layout.css'

export default function Layout() {
  return (
    <div className="site-wrapper">
      <EnchantedBackground />
      <Navbar />
      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
