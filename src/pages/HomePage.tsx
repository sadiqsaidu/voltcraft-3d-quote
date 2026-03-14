import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Upload, 
  Clock, 
  Banknote, 
  Shield, 
  Cpu, 
  ArrowRight, 
  Zap,
  Box,
  Layers
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Upload,
      title: 'Easy Upload',
      description: 'Simply upload your STL, OBJ, or 3MF file and get an instant quote'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most prints completed within 24-72 hours depending on complexity'
    },
    {
      icon: Banknote,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden fees. Pay only for what you need'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Printed on Bambu Lab A1 for consistent, professional results'
    }
  ]

  const materials = [
    { name: 'PLA', desc: 'Eco-friendly, great for prototypes', price: '₦100/g', colors: 'Black, White' },
    { name: 'PETG', desc: 'Strong, durable, heat resistant', price: '₦150/g', colors: 'Red, Blue, Grey' }
  ]

  const process = [
    { step: 1, title: 'Upload Model', desc: 'Upload your 3D file in STL, OBJ, or 3MF format' },
    { step: 2, title: 'Configure', desc: 'Select material, quality, and quantity' },
    { step: 3, title: 'Get Quote', desc: 'Receive instant pricing and print time estimate' },
    { step: 4, title: 'Order', desc: 'Submit your request and we\'ll start printing' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-voltcraft-primary/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-voltcraft-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-voltcraft-secondary/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-voltcraft-primary/20 border border-voltcraft-primary/30 text-voltcraft-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Now offering 3D Printing Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight"
            >
              Turn Your Ideas Into{' '}
              <span className="gradient-text">Reality</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-600 dark:text-voltcraft-gray-400 max-w-2xl mx-auto"
            >
              Professional 3D printing services powered by Bambu Lab technology. 
              Upload your model, get an instant quote, and receive high-quality prints 
              delivered to your doorstep.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/quote"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-voltcraft-primary to-voltcraft-secondary rounded-xl font-semibold text-white hover:opacity-90 transition-opacity glow text-lg"
              >
                Get Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/materials"
                className="flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-gray-900 dark:text-white hover:bg-white/10 transition-colors"
              >
                View Materials
              </Link>
            </motion.div>
          </div>
          
          {/* Floating 3D Elements */}
          <div className="relative mt-16 md:mt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative mx-auto max-w-3xl"
            >
              <div className="aspect-video rounded-2xl bg-white dark:bg-voltcraft-dark border border-gray-200 dark:border-white/10 overflow-hidden model-viewer flex items-center justify-center">
                <div className="text-center p-8">
                  <Box className="w-24 h-24 mx-auto text-voltcraft-secondary mb-4 animate-float" />
                  <p className="text-gray-600 dark:text-voltcraft-gray-400">3D Model Preview</p>
                  <p className="text-sm text-gray-500 dark:text-voltcraft-gray-500 mt-1">Upload a file to see it here</p>
                </div>
              </div>
              
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-1 -top-3 z-10 w-[46%] max-w-[180px] min-h-[64px] sm:w-auto sm:max-w-none sm:min-h-0 sm:-left-4 md:-left-16 sm:top-1/4 glass rounded-xl p-2.5 sm:p-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-voltcraft-primary/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-voltcraft-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-voltcraft-gray-400">Powered by</p>
                    <p className="text-[13px] leading-tight sm:text-sm font-semibold text-gray-900 dark:text-white">Bambu Lab A1</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -right-1 -bottom-8 z-10 w-[46%] max-w-[180px] min-h-[64px] sm:w-auto sm:max-w-none sm:min-h-0 sm:-right-4 md:-right-16 sm:bottom-1/4 glass rounded-xl p-2.5 sm:p-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-voltcraft-secondary/20 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-voltcraft-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-voltcraft-gray-400">Build Volume</p>
                    <p className="text-[13px] leading-tight sm:text-sm font-semibold text-gray-900 dark:text-white">256 × 256 × 256mm</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-voltcraft-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
              Why Choose <span className="gradient-text">Voltcraft</span>?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-voltcraft-gray-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with expert craftsmanship to deliver 
              exceptional 3D printing services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-voltcraft-dark rounded-2xl border border-gray-200 dark:border-white/10 hover:border-voltcraft-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-voltcraft-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-voltcraft-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-voltcraft-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-voltcraft-gray-400 max-w-2xl mx-auto">
              Getting your 3D print is easy. Follow these simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-voltcraft-secondary to-transparent" />
                )}
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-voltcraft-primary to-voltcraft-secondary flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-voltcraft-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-voltcraft-primary to-voltcraft-secondary rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Materials Preview */}
      <section className="py-20 bg-gray-50 dark:bg-voltcraft-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
              Available <span className="gradient-text">Materials</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-voltcraft-gray-400 max-w-2xl mx-auto">
              Choose from our selection of high-quality filaments for your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 bg-white dark:bg-voltcraft-dark rounded-xl border border-gray-200 dark:border-white/10 hover:border-voltcraft-primary/50 transition-colors text-center"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-xl mb-1">{material.name}</h3>
                <p className="text-sm text-gray-600 dark:text-voltcraft-gray-400 mb-2">{material.desc}</p>
                <p className="text-voltcraft-secondary font-bold text-lg mb-2">{material.price}</p>
                <p className="text-xs text-gray-500 dark:text-voltcraft-gray-500">Colors: {material.colors}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/materials"
              className="text-voltcraft-secondary hover:text-voltcraft-primary transition-colors font-medium inline-flex items-center gap-2"
            >
              Learn more about materials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-voltcraft-primary to-voltcraft-secondary p-1"
          >
            <div className="bg-white dark:bg-voltcraft-dark rounded-[22px] p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Ready to bring your ideas to life?
              </h2>
              <p className="text-gray-700 dark:text-voltcraft-gray-300 mb-8 max-w-xl mx-auto">
                Upload your 3D model now and get an instant quote. No commitments, 
                no hidden fees – just professional 3D printing services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/quote"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-voltcraft-primary to-voltcraft-secondary rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  <Upload className="w-5 h-5" />
                  Upload Your Model
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-gray-900 dark:text-white hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
