import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import './SmudgeTransition.css'

interface Props {
  children: ReactNode
}

export default function SmudgeTransition({ children }: Props) {
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="smudge-entry">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="40" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>

      <motion.div
        className="smudge-container"
        initial={{ opacity: 0, filter: 'url(#smudge-entry) blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'url(#smudge-entry) blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  )
}
