import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-[#222] bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-400 text-xs text-center md:text-left">
            © {currentYear} Voltcraft. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
            <Link to="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="https://instagram.com/_voltcraft" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/2349036225266" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">WhatsApp</a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
