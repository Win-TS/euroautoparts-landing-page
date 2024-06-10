import Home from './pages/Home.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Product from './pages/Product.tsx';
import FAQ from './pages/FAQ.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';

export default function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div style={{ paddingTop: '77.32px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    )
}