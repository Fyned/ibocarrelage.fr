import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import DevisPage from './pages/DevisPage'
import { DevisProvider } from './hooks/useDevis'

export default function App() {
  return (
    <BrowserRouter>
      <DevisProvider>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/devis" element={<DevisPage />} />
          </Routes>
        </main>
        <Footer />
      </DevisProvider>
    </BrowserRouter>
  )
}
