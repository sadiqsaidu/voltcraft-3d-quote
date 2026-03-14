import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-voltcraft-darker border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-voltcraft-gray-400 text-sm">
              Professional 3D printing services using state-of-the-art Bambu Lab technology. 
              Turn your ideas into reality.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/_voltcraft" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/2349036225266" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quote" className="text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/materials" className="text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors">
                  Materials Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-voltcraft-gray-400">Rapid Prototyping</li>
              <li className="text-gray-600 dark:text-voltcraft-gray-400">Custom Parts</li>
              <li className="text-gray-600 dark:text-voltcraft-gray-400">Small Batch Production</li>
              <li className="text-gray-600 dark:text-voltcraft-gray-400">Design Consultation</li>
              <li className="text-gray-600 dark:text-voltcraft-gray-400">IC & Components Sales</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-voltcraft-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-voltcraft-gray-400 text-sm">
                  Voltcraft Electronics<br />
                  Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-voltcraft-primary flex-shrink-0" />
                <a href="tel:+2349036225266" className="text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors text-sm">
                  09036225266
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-voltcraft-primary flex-shrink-0" />
                <a href="mailto:info@voltcraft.org.ng" className="text-gray-600 dark:text-voltcraft-gray-400 hover:text-gray-900 dark:text-white transition-colors text-sm">
                  info@voltcraft.org.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-voltcraft-gray-500 text-sm">
            © {currentYear} Voltcraft. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 dark:text-voltcraft-gray-500 hover:text-gray-900 dark:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-voltcraft-gray-500 hover:text-gray-900 dark:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
