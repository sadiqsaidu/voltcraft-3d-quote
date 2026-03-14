import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Hexagon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  // Minimized navigation as requested
  const navLinks = [
    { path: '/quote', label: 'Quote' },
    { path: '/materials', label: 'Materials' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-gray-200 dark:border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Hexagon className="w-5 h-5 text-voltcraft-primary" />
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Voltcraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-voltcraft-primary font-medium'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Theme */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <Link
              to="/quote"
              className="px-5 py-2 bg-voltcraft-primary text-black dark:text-[#0A0A0A] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Link>
          </div>

          <div className="flex w-full items-center justify-end md:hidden gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden border-t border-gray-200 dark:border-[#222] bg-white dark:bg-[#0A0A0A]"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm transition-colors ${
                    isActive(link.path)
                      ? 'bg-gray-50 dark:bg-[#1A1A1A] text-voltcraft-primary font-medium'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-voltcraft-primary text-black dark:text-[#0A0A0A] rounded-lg text-sm font-medium text-center"
              >
                Get Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
