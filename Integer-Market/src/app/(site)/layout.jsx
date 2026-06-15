import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CartDrawer from '../../components/ui/CartDrawer'
import ScrollToTop from '../../components/ui/ScrollToTop'

export default function SiteLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <CartDrawer />
    </>
  )
}
