'use client'
import { motion } from 'framer-motion'

export function FadeUp({ children, delay = 0, y = 30, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  )
}

export function WordReveal({ text, className = '', italicIndices = [], inView = true, delayBase = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((w, i) => {
        const anim = inView
          ? { whileInView: { y: '0%' }, viewport: { once: true } }
          : { animate: { y: '0%' } }
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
            <motion.span
              className={`inline-block ${italicIndices.includes(i) ? 'italic-serif' : ''}`}
              initial={{ y: '110%' }}
              {...anim}
              transition={{ duration: 0.95, delay: delayBase + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >{w}</motion.span>
          </span>
        )
      })}
    </span>
  )
}

export function ImageReveal({ src, alt, className = '', ratio = 'aspect-[4/5]' }) {
  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`} data-cursor="View">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[#efeae1] origin-bottom"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      />
    </div>
  )
}
