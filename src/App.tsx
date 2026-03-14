import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import QuotePage from './pages/QuotePage'
import MaterialsPage from './pages/MaterialsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  )
}

export default App
