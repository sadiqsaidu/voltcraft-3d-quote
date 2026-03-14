import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Box, Calculator, Info } from 'lucide-react'
import { FileAnalysis } from '../types'

interface ManualDimensionsProps {
  onDimensionsChange: (analysis: FileAnalysis | null) => void
  disabled?: boolean
}

const ManualDimensions = ({ onDimensionsChange, disabled }: ManualDimensionsProps) => {
  const [dimensions, setDimensions] = useState({
    x: '',
    y: '',
    z: ''
  })

  // Calculate volume and create analysis when dimensions change
  useEffect(() => {
    const x = parseFloat(dimensions.x) || 0
    const y = parseFloat(dimensions.y) || 0
    const z = parseFloat(dimensions.z) || 0

    if (x > 0 && y > 0 && z > 0) {
      // Volume in cm³ (dimensions are in mm)
      const volumeCm3 = (x * y * z) / 1000

      // Estimate triangle count based on volume (rough approximation)
      const estimatedTriangles = Math.round(volumeCm3 * 100)

      const analysis: FileAnalysis = {
        volume: Math.round(volumeCm3 * 100) / 100,
        dimensions: { x, y, z },
        triangleCount: estimatedTriangles,
        isValid: true,
        errors: []
      }

      onDimensionsChange(analysis)
    } else {
      onDimensionsChange(null)
    }
  }, [dimensions, onDimensionsChange])

  const updateDimension = (axis: 'x' | 'y' | 'z', value: string) => {
    // Allow only numbers and decimal point
    const sanitized = value.replace(/[^0-9.]/g, '')
    setDimensions(prev => ({ ...prev, [axis]: sanitized }))
  }

  const presets = [
    { name: 'Phone Case', x: 75, y: 150, z: 10 },
    { name: 'Small Box', x: 50, y: 50, z: 30 },
    { name: 'Medium Box', x: 100, y: 100, z: 50 },
    { name: 'Enclosure', x: 150, y: 100, z: 80 },
    { name: 'Figurine', x: 50, y: 50, z: 100 },
  ]

  const applyPreset = (preset: { x: number; y: number; z: number }) => {
    setDimensions({
      x: preset.x.toString(),
      y: preset.y.toString(),
      z: preset.z.toString()
    })
  }

  const clearDimensions = () => {
    setDimensions({ x: '', y: '', z: '' })
  }

  const hasValidDimensions = parseFloat(dimensions.x) > 0 && 
                             parseFloat(dimensions.y) > 0 && 
                             parseFloat(dimensions.z) > 0

  return (
    <div className={`space-y-6 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      {/* Info box */}
      <div className="p-3 bg-voltcraft-secondary/10 border border-voltcraft-secondary/30 rounded-lg flex items-start gap-3">
        <Info className="w-5 h-5 text-voltcraft-secondary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700 dark:text-voltcraft-gray-300">
          Enter the bounding box dimensions of your model in millimeters. 
          This gives an estimated quote based on the overall size. 
          For more accurate pricing, upload your actual 3D model file.
        </p>
      </div>

      {/* Dimension inputs */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-voltcraft-gray-400 mb-2">
            Width (X)
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={dimensions.x}
              onChange={(e) => updateDimension('x', e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-voltcraft-darker border-2 border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white text-center text-lg font-semibold placeholder-voltcraft-gray-600 focus:outline-none focus:border-voltcraft-secondary transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-voltcraft-gray-500 text-sm">
              mm
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-voltcraft-gray-400 mb-2">
            Depth (Y)
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={dimensions.y}
              onChange={(e) => updateDimension('y', e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-voltcraft-darker border-2 border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white text-center text-lg font-semibold placeholder-voltcraft-gray-600 focus:outline-none focus:border-voltcraft-secondary transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-voltcraft-gray-500 text-sm">
              mm
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-voltcraft-gray-400 mb-2">
            Height (Z)
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={dimensions.z}
              onChange={(e) => updateDimension('z', e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-voltcraft-darker border-2 border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white text-center text-lg font-semibold placeholder-voltcraft-gray-600 focus:outline-none focus:border-voltcraft-secondary transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-voltcraft-gray-500 text-sm">
              mm
            </span>
          </div>
        </div>
      </div>

      {/* Visual representation */}
      {hasValidDimensions && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-gray-50 dark:bg-voltcraft-darker rounded-lg"
        >
          <div className="flex items-center gap-4">
            <Box className="w-12 h-12 text-voltcraft-secondary" />
            <div>
              <p className="text-gray-900 dark:text-white font-medium">
                {dimensions.x} × {dimensions.y} × {dimensions.z} mm
              </p>
              <p className="text-sm text-gray-600 dark:text-voltcraft-gray-400">
                Estimated volume: {((parseFloat(dimensions.x) * parseFloat(dimensions.y) * parseFloat(dimensions.z)) / 1000).toFixed(2)} cm³
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick presets */}
      <div>
        <p className="text-sm text-gray-500 dark:text-voltcraft-gray-500 mb-2">Quick presets:</p>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="px-3 py-1.5 text-sm bg-white dark:bg-voltcraft-dark hover:bg-white dark:bg-voltcraft-dark/80 text-gray-700 dark:text-voltcraft-gray-300 rounded-lg transition-colors"
            >
              {preset.name}
            </button>
          ))}
          {hasValidDimensions && (
            <button
              onClick={clearDimensions}
              className="px-3 py-1.5 text-sm bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Success indicator */}
      {hasValidDimensions && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
        >
          <Calculator className="w-5 h-5 text-green-500" />
          <p className="text-sm text-green-400">
            Dimensions calculated! Click "Continue to Configure" to proceed.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default ManualDimensions
