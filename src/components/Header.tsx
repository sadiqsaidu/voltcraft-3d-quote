import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/quote', label: 'Get Quote' },
    { path: '/materials', label: 'Materials' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-voltcraft-primary/20 rounded-lg"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

                    {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-voltcraft-gray-800 text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Link
              to="/quote"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-voltcraft-primary to-voltcraft-secondary rounded-lg font-semibold text-white hover:opacity-90 transition-opacity glow-blue"
            >
              Get Instant Quote
            </Link>
          </div>

                    <div className="flex w-full items-center justify-between md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200 dark:border-white/10"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-voltcraft-primary/20 text-white'
                      : 'text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-voltcraft-primary to-voltcraft-secondary rounded-lg font-semibold text-white text-center"
              >
                Get Instant Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
