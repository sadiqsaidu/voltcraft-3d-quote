import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomePage = () => {
  const features = [
    {
      title: 'FAST TURNAROUND',
      description: 'Streamlined production process. Upload your model, select materials, and receive your high-quality prints within 24-72 hours.'
    },
    {
      title: 'FULL AUTHORITY',
      description: 'Optional control over layer heights, infills, and materials. You define exact parameters to match your specific engineering needs.'
    },
    {
      title: 'PRECISION STANDARD',
      description: 'Automatic Bambu Lab certification. Your models are printed with absolute dimension accuracy and flawless first layers.'
    }
  ]

  const process = [
    { step: '01', title: 'CONNECT', desc: 'Link your specifications and upload your 3D files (STL, OBJ, 3MF) to the terminal.' },
    { step: '02', title: 'CONFIGURE', desc: 'Define material, layer height, structural infill, and review structural analysis.' },
    { step: '03', title: 'LAUNCH', desc: 'Sign the transaction order and deploy your physical production run instantly.' }
  ]

  return (
    <div className="min-h-screen pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-gray-200 dark:border-[#222]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-gray-900 dark:text-white uppercase tracking-widest mb-8"
          >
            VOLTCRAFT
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-loose space-y-2"
          >
            <span className="block">One click. One signature. Your print is live.</span>
            <span className="block">The fastest way to deploy physical prototypes in Nigeria.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-white text-black font-mono font-bold tracking-widest uppercase hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors rounded-sm"
            >
              INITIALIZE LAUNCH
            </Link>
            <Link
              to="/summary"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-300 dark:border-[#333] text-gray-900 dark:text-white font-mono font-bold tracking-widest uppercase hover:border-gray-400 dark:hover:border-[#555] transition-colors rounded-sm"
            >
              SYSTEM MANUAL
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-b border-gray-200 dark:border-[#222]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 md:p-10 bg-white dark:bg-[#050505] border border-gray-200 dark:border-[#222] rounded-xl hover:border-voltcraft-primary transition-colors"
              >
                <h3 className="text-xl font-bold font-mono tracking-widest text-gray-900 dark:text-white mb-6 uppercase">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-loose">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Protocol (How it works) */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-display text-gray-900 dark:text-white tracking-[0.2em] uppercase">
              EXECUTION PROTOCOL
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-display text-gray-200 dark:text-[#222] mb-6 tracking-widest opacity-80">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold font-mono text-gray-900 dark:text-white mb-4 uppercase tracking-widest">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-loose">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
