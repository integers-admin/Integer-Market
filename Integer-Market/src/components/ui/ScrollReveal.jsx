'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/variants'

export default function ScrollReveal({ children, className = '', delay = 0, variants: customVariants, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={customVariants || {
        ...fadeInUp,
        visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
