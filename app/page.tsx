'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import LenisProvider from '@/components/lenis-provider'
import Cursor from '@/components/cursor'
import Magnetic from '@/components/magnetic'
import { FadeUp, WordReveal, ImageReveal } from '@/components/reveal'
import LoadingScreen from '@/components/loading-screen'

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1775241186452-c3d99b09f223?auto=format&fit=crop&w=2200&q=80',
  p1: 'https://images.pexels.com/photos/33685845/pexels-photo-33685845.jpeg?auto=compress&cs=tinysrgb&w=1600',
  p2: 'https://images.pexels.com/photos/33685861/pexels-photo-33685861.jpeg?auto=compress&cs=tinysrgb&w=1600',
  p3: 'https://images.unsplash.com/photo-1760072513393-b9d81f65dd7e?auto=format&fit=crop&w=1600&q=80',
  p4: 'https://images.unsplash.com/photo-1775241186452-c3d99b09f223?auto=format&fit=crop&w=1600&q=80',
  p5: 'https://images.unsplash.com/photo-1765862835326-14b5070fdde9?auto=format&fit=crop&w=1600&q=80',
  p6: 'https://images.unsplash.com/photo-1593136573819-c3b57b8caf29?auto=format&fit=crop&w=1600&q=80',
  p7: 'https://images.pexels.com/photos/20036481/pexels-photo-20036481.jpeg?auto=compress&cs=tinysrgb&w=1600',
  p8: 'https://images.unsplash.com/photo-1756079664354-34944e001f6d?auto=format&fit=crop&w=1600&q=80',
  p9: 'https://images.unsplash.com/photo-1771239048293-72abf673adb2?auto=format&fit=crop&w=1600&q=80',
  p10: 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg?auto=compress&cs=tinysrgb&w=1600',
  p11: 'https://images.unsplash.com/photo-1639145044835-ec083afa6ebb?auto=format&fit=crop&w=1600&q=80',
}

interface Project {
  id: string
  title: string
  place: string
  year: string
  tag: string
  img: string
  w: string
  h: string
}

const PROJECTS: Project[] = [
  { id: '01', title: 'Maison Clair', place: 'Provence, FR', year: '2024', tag: 'Residence', img: IMAGES.p1, w: 'md:col-span-7', h: 'aspect-[4/5] md:aspect-[5/6]' },
  { id: '02', title: 'Linen House', place: 'Byron Bay, AU', year: '2024', tag: 'Retreat', img: IMAGES.p3, w: 'md:col-span-5', h: 'aspect-[4/5] md:aspect-[4/5]' },
  { id: '03', title: 'Nocturne Kitchen', place: 'Copenhagen, DK', year: '2023', tag: 'Residence', img: IMAGES.p4, w: 'md:col-span-5', h: 'aspect-[4/5]' },
  { id: '04', title: 'The Orchard Suite', place: 'Kyoto, JP', year: '2023', tag: 'Hospitality', img: IMAGES.p5, w: 'md:col-span-7', h: 'aspect-[4/5] md:aspect-[6/5]' },
  { id: '05', title: 'Quiet Bath', place: 'Lisbon, PT', year: '2023', tag: 'Residence', img: IMAGES.p6, w: 'md:col-span-6', h: 'aspect-[4/5]' },
  { id: '06', title: 'Pages & Palms', place: 'Marrakech, MA', year: '2022', tag: 'Retreat', img: IMAGES.p7, w: 'md:col-span-6', h: 'aspect-[4/5]' },
]

interface Service {
  no: string
  t: string
  d: string
}

const SERVICES: Service[] = [
  { no: '01', t: 'Full Interior Design', d: 'End-to-end design from concept to final styling \u2014 plans, materials, lighting, joinery, furniture and the slow, quiet details.' },
  { no: '02', t: 'Renovation & Architecture', d: 'Thoughtful spatial planning for homes and retreats, working alongside architects and trusted makers to compose how a space lives.' },
  { no: '03', t: 'Hospitality & Retreat', d: 'Boutique hotels, guesthouses and member spaces designed around calm arrival, slow mornings and unhurried evenings.' },
  { no: '04', t: 'Art Direction & Styling', d: 'Editorial styling, launch sets and the finishing layer \u2014 objects, textiles, books, scent, and the quiet art of restraint.' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', on); on()
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links: [string, string][] = [['Work', '#work'], ['Studio', '#studio'], ['Services', '#services'], ['Journal', '#journal'], ['Contact', '#contact']]
  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled ? 'backdrop-blur-md bg-[#efeae1]/70 border-b border-[#1a1a1a]/10' : ''}`}
      >
        <div className="px-5 md:px-10 py-5 md:py-6 flex items-center justify-between">
          <a href="#top" className={`font-serif text-lg md:text-xl tracking-tight leading-none transition-colors duration-500 ${scrolled ? 'text-[#1a1a1a]' : 'text-[#f5f1e8]'}`}>
            My Catchy <span className="italic-serif">Interiors</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-sans text-[13px] uppercase tracking-[0.18em]">
            {links.map(([l, h]) => (
              <a key={l} href={h} data-cursor="\u2192" className={`relative group transition-colors duration-500 ${scrolled ? 'text-[#1a1a1a]' : 'text-[#f5f1e8]'}`}>
                <span className="inline-block">{l}</span>
                <span className={`absolute left-0 -bottom-1 h-px w-full origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100 ${scrolled ? 'bg-[#1a1a1a]' : 'bg-[#f5f1e8]'}`} />
              </a>
            ))}
          </nav>
          <Magnetic>
            <button onClick={() => setOpen(true)} className={`font-sans text-[12px] uppercase tracking-[0.2em] border rounded-full px-4 md:px-5 py-2 md:py-2.5 transition-colors duration-500 ${scrolled ? 'border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5f1e8]' : 'border-[#f5f1e8] text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-[#1a1a1a]'}`} data-cursor="Say hi">
              <span className="md:hidden">Menu</span>
              <span className="hidden md:inline">Begin a project</span>
            </button>
          </Magnetic>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#1a1a1a] text-[#efeae1]">
            <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }} className="h-full flex flex-col">
              <div className="px-5 md:px-10 py-5 md:py-6 flex items-center justify-between">
                <span className="font-serif text-lg">My Catchy <span className="italic-serif">Interiors</span></span>
                <button onClick={() => setOpen(false)} className="font-sans text-[12px] uppercase tracking-[0.2em]">Close</button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-5 md:px-10 gap-3">
                {links.map(([l, h], i) => (
                  <motion.a key={l} href={h} onClick={() => setOpen(false)}
                    initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.08 }}
                    className="font-serif text-5xl md:text-7xl leading-[1] tracking-tight hover:italic-serif transition-all">
                    {l}<span className="italic-serif text-xl md:text-2xl align-top ml-2">0{i + 1}</span>
                  </motion.a>
                ))}
              </div>
              <div className="px-5 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 font-sans text-[12px] uppercase tracking-[0.2em]">
                <span>hello@mycatchyinteriors.com</span>
                <span>Copenhagen \u2014 Byron \u2014 Kyoto</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={IMAGES.hero} alt="Warm minimal living room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-between px-5 md:px-10 pt-28 md:pt-32 pb-8">
        <div className="max-w-[1600px]">
          <h1 className="font-serif text-[#f5f1e8] hero-title text-[15vw] md:text-[11.5vw] lg:text-[10vw]">
            <WordReveal text="Interiors composed with" italicIndices={[]} inView={false} />
            <br />
            <WordReveal text="quiet, confident restraint." italicIndices={[2]} inView={false} delayBase={0.2} />
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <FadeUp delay={1.3} className="max-w-md">
            <p className="font-sans text-[#f5f1e8]/85 text-[13px] md:text-[14px] leading-[1.9]">
              <span className="italic-serif text-[15px]">My Catchy Interiors</span> is a small studio shaping homes, retreats and quiet hospitality around the way you actually want to live \u2014 with warmth, proportion, and honest materials.
            </p>
          </FadeUp>

          <FadeUp delay={1.5} className="flex items-center gap-4">
            <Magnetic strength={0.35}>
              <a href="#work" data-cursor="Explore" className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#f5f1e8]/70 text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-[#1a1a1a] transition-colors duration-700">
                <span className="font-sans uppercase tracking-[0.25em] text-[11px] md:text-[12px]">View work</span>
                <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 opacity-70 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            </Magnetic>
          </FadeUp>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#f5f1e8]/70 font-sans text-[10px] uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="block w-px h-8 bg-[#f5f1e8]/60" />
      </motion.div>
    </section>
  )
}

function Marquee() {
  const words = ['Warmth', 'Proportion', 'Patina', 'Linen', 'Stone', 'Oak', 'Light', 'Restraint', 'Time', 'Slowness']
  return (
    <section className="py-4 md:py-6 border-y border-[#1a1a1a]/15 overflow-hidden bg-[#d0ccc4]">
      <div className="flex animate-marquee-slow whitespace-nowrap">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12">
            {words.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-8 md:gap-12">
                <span className={`font-serif text-xl md:text-3xl lg:text-4xl tracking-tight ${i % 3 === 1 ? 'italic-serif' : ''}`}>{w}</span>
                <Plus className="w-3 h-3 md:w-4 md:h-4 opacity-50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="px-5 md:px-10 py-6 md:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] mb-6">
              <span className="w-8 h-px bg-[var(--muted)]" />
              <span>A studio, not a showroom</span>
            </div>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
              style={{ 
                fontFamily: 'var(--font-cormorant), serif',
                fontWeight: 700
              }}
            >
              The craft of living,{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 600 }}>translated into</span>
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 600 }}>space.</span>
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <div className="flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] mb-4">
              [ Approach ]
            </div>
            <p className="font-sans text-[15px] leading-[1.85] text-[var(--muted)]">
              Every project begins the same way — with long conversations, slow walks through the site, and a genuine curiosity about the people who will live there. From that, we build spaces that feel calm, collected, and quietly indulgent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <div className={`${p.w} col-span-12`}>
      <FadeUp delay={(i % 2) * 0.1}>
        <a href="#" className="group block">
          <div className={`relative overflow-hidden rounded-3xl ${p.h}`} data-cursor="View">
            <motion.img src={p.img} alt={p.title} loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} />
            <motion.img src={p.img} alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }} whileHover={{ scale: 1.08 }} transition={{ duration: 1.2 }} />
            <motion.div
              className="absolute inset-0 bg-[#efeae1] origin-bottom"
              initial={{ scaleY: 1 }} whileInView={{ scaleY: 0 }} viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }} />
            <div className="absolute top-4 left-4 font-sans text-[11px] uppercase tracking-[0.25em] text-white/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              {p.tag}
            </div>
            <div className="absolute bottom-4 right-4 flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-xl md:text-2xl tracking-tight">
              <span className="italic-serif text-[var(--muted)] text-base mr-2">{p.id}</span>
              {p.title}
            </h3>
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] shrink-0">{p.place} \u2014 {p.year}</span>
          </div>
        </a>
      </FadeUp>
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="px-5 md:px-10 pb-24 md:pb-40">
      <div className="flex items-end justify-between mb-10 md:mb-16">
        <div>
          <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
            <span className="w-8 h-px bg-[var(--muted)]" /> Selected works \u2014 2022 / 2025
          </div>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight">Recent <span className="italic-serif">compositions.</span></h2>
        </div>
        <a href="#" data-cursor="Index" className="hidden md:inline-block font-sans text-[12px] uppercase tracking-[0.22em] border-b border-[#1a1a1a] pb-1 hover:tracking-[0.3em] transition-all duration-500">All projects \u2014 24</a>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-8">
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>
    </section>
  )
}

function Studio() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  return (
    <section id="studio" ref={ref} className="relative bg-[#1a1a1a] text-[#efeae1] overflow-hidden">
      <div className="px-5 md:px-10 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-5 md:sticky md:top-28">
            <motion.div style={{ y: y1 }}>
              <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[#efeae1]/60 mb-8">
                <span className="w-8 h-px bg-[#efeae1]/60" /> The studio
              </div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
                A practice of <span className="italic-serif">slow rooms</span>, honest materials, and long hours with the light.
              </h2>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-8">
            <motion.div style={{ y: y2 }} className="aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={IMAGES.p8} alt="Studio interior" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <FadeUp>
              <p className="font-sans text-[#efeae1]/80 leading-[1.9] text-[15px]">
                We are a small studio led by <span className="italic-serif text-[#efeae1]">Ines Halvor</span> and a handful of makers we trust. We take on a short list of projects each year \u2014 residential, retreat, and a little hospitality \u2014 so every room gets the hours it needs.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-sans text-[#efeae1]/80 leading-[1.9] text-[15px]">
                Our work is quiet on purpose. We believe a home should hold you, not perform for you. We draw slowly, specify honestly, and stay close to the build until the last cushion is softened.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="pt-6 grid grid-cols-3 gap-4 border-t border-[#efeae1]/15">
              {[['12', 'Years'], ['48', 'Projects'], ['4', 'Continents']].map(([n, l]) => (
                <div key={l} className="pt-6">
                  <div className="font-serif text-4xl md:text-5xl tracking-tight"><span className="italic-serif">{n}</span></div>
                  <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.25em] text-[#efeae1]/60">{l}</div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [activeStep, setActiveStep] = useState(0)
  
  const steps = [
    { 
      no: 'I', 
      title: 'Conversation', 
      desc: 'We begin with long, unhurried conversations — about how you live, what you love, and the kind of calm you want to come home to.',
      img: 'https://images.pexels.com/photos/34995590/pexels-photo-34995590.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    { 
      no: 'II', 
      title: 'Concept', 
      desc: 'A mood, a palette, a plan. We translate your story into a coherent spatial language grounded in proportion and restraint.',
      img: 'https://images.unsplash.com/photo-1772475329901-58f77a9625ab?auto=format&fit=crop&w=1400&q=80'
    },
    { 
      no: 'III', 
      title: 'Curation', 
      desc: 'We source honestly — from European stone yards to small ateliers — favouring the artisanal over the algorithmic.',
      img: 'https://images.unsplash.com/photo-1756079664354-34944e001f6d?auto=format&fit=crop&w=1400&q=80'
    },
    { 
      no: 'IV', 
      title: 'Craft', 
      desc: 'On-site, our team oversees every joint, seam, and shadow-line so that the finished space feels inevitable, never forced.',
      img: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?auto=format&fit=crop&w=1600&q=80'
    },
  ]
  
  return (
    <section id="services" className="px-5 md:px-10 py-24 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] mb-6">
              <span className="w-8 h-px bg-[var(--muted)]" /> How we work
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8">
              A slow, four-step <span className="italic-serif">ritual.</span>
            </h2>
            <p className="font-sans text-[14px] leading-[1.85] text-[var(--muted)] max-w-md mb-12">
              From first conversation to final styling, every project moves through the same unhurried rhythm — so nothing is rushed, and nothing is accidental.
            </p>
            
            {/* Image */}
            <FadeUp>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl relative">
                <img
                  src={steps[activeStep].img}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={step.no} delay={i * 0.08}>
                <div 
                  className="border-t border-[#1a1a1a]/15 py-8 md:py-10 cursor-pointer transition-colors duration-300 md:hover:bg-[#f5f1e8]/30"
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                >
                  <div className="flex items-start gap-6 mb-3">
                    <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--muted)] pt-1.5 shrink-0">
                      ( {step.no} )
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.1]">
                      {step.title}
                    </h3>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeStep === i ? 'auto' : 0,
                      opacity: activeStep === i ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-[14px] leading-[1.85] text-[var(--muted)] ml-[calc(3ch+1.5rem)] pt-2">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const extras = [IMAGES.p9, IMAGES.p10, IMAGES.p11, IMAGES.p2]
  return (
    <section className="px-5 md:px-10 pb-24 md:pb-40">
      <FadeUp>
        <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] mb-8">
          <span className="w-8 h-px bg-[var(--muted)]" /> Fragments
        </div>
      </FadeUp>
      <div className="grid grid-cols-12 gap-5 md:gap-6">
        <div className="col-span-12 md:col-span-5"><ImageReveal src={extras[0]} alt="Fragment" ratio="aspect-[4/5]" /></div>
        <div className="col-span-12 md:col-span-7 md:mt-24"><ImageReveal src={extras[1]} alt="Fragment" ratio="aspect-[5/4]" /></div>
        <div className="col-span-7 md:col-span-4"><ImageReveal src={extras[2]} alt="Fragment" ratio="aspect-[3/4]" /></div>
        <div className="col-span-5 md:col-span-4 md:col-start-7 md:mt-16"><ImageReveal src={extras[3]} alt="Fragment" ratio="aspect-square" /></div>
      </div>
    </section>
  )
}

function Quote() {
  const services = [
    'Residential',
    'Hospitality',
    'Retreats',
    'Workspaces',
    'Material research',
    'Custom joinery',
    'Art advisory',
    'Styling',
  ]
  
  return (
    <section className="py-4 md:py-6 bg-[#1a1a1a] overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee-slow">
          {services.map((service, i) => (
            <div key={i} className="flex items-center">
              <span 
                className="font-serif text-xl md:text-3xl lg:text-4xl tracking-tight text-[#efeae1] px-3 md:px-5"
                style={{ 
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontWeight: 400
                }}
              >
                {service}
              </span>
              <span className="text-[#efeae1]/40 text-base md:text-lg">•</span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee-slow" aria-hidden="true">
          {services.map((service, i) => (
            <div key={i} className="flex items-center">
              <span 
                className="font-serif text-xl md:text-3xl lg:text-4xl tracking-tight text-[#efeae1] px-3 md:px-5"
                style={{ 
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontWeight: 400
                }}
              >
                {service}
              </span>
              <span className="text-[#efeae1]/40 text-base md:text-lg">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journal() {
  const posts: { t: string; k: string; d: string; img: string }[] = [
    { t: 'On linen, and the kindness of wrinkles', k: 'Materials', d: '6 min', img: IMAGES.p9 },
    { t: 'A room should hold, not perform', k: 'Notes', d: '4 min', img: IMAGES.p11 },
    { t: 'Building in Kyoto \u2014 a field letter', k: 'Dispatch', d: '9 min', img: IMAGES.p10 },
  ]
  return (
    <section id="journal" className="px-5 md:px-10 py-24 md:py-32 bg-[#e6dfd2]">
      <div className="flex items-end justify-between mb-10 md:mb-16">
        <div>
          <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
            <span className="w-8 h-px bg-[var(--muted)]" /> Journal
          </div>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight">Field notes, <span className="italic-serif">slowly kept.</span></h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {posts.map((p, i) => (
          <FadeUp key={p.t} delay={i * 0.08}>
            <a href="#" className="group block" data-cursor="Read">
              <div className="overflow-hidden rounded-3xl aspect-[4/5]">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
              </div>
              <div className="mt-5 flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
                <span>{p.k}</span><span>{p.d} read</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl tracking-tight leading-[1.15]">
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-[background-size] duration-700">{p.t}</span>
              </h3>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative bg-[#1a1a1a] text-[#efeae1] overflow-hidden min-h-[70vh] flex items-center">
      <div className="px-5 md:px-10 lg:px-16 py-24 md:py-32 w-full max-w-[1800px]">
        <FadeUp>
          <h2 
            className="text-[27vw] sm:text-[25vw] md:text-[21vw] lg:text-[19vw] xl:text-[17vw] leading-[0.88]"
            style={{ 
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#F0EBE0'
            }}
          >
            My <span style={{ fontStyle: 'italic' }}>Catchy</span>
          </h2>
          <h3 
            className="text-[25vw] sm:text-[23vw] md:text-[19vw] lg:text-[17vw] xl:text-[15vw] leading-[0.88] mt-2"
            style={{ 
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 600,
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
              color: '#B8B3A8'
            }}
          >
            Interiors.
          </h3>
        </FadeUp>
        
        <FadeUp delay={0.2} className="mt-16 md:mt-20">
          <Magnetic strength={0.3}>
            <a 
              href="mailto:hello@mycatchyinteriors.com" 
              data-cursor="Write us"
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#efeae1]/30 hover:border-[#efeae1] hover:bg-[#efeae1]/10 transition-all duration-500"
            >
              <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 text-[#efeae1]" />
            </a>
          </Magnetic>
        </FadeUp>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#efeae1]/80 border-t border-white/10">
      <div className="px-5 md:px-10 py-10 grid grid-cols-12 gap-6 font-sans text-[12px] uppercase tracking-[0.22em]">
        <div className="col-span-12 md:col-span-4">
          <div className="font-serif text-2xl text-[#efeae1] normal-case tracking-tight">My Catchy <span className="italic-serif">Interiors</span></div>
          <p className="mt-3 normal-case tracking-normal text-[12px] text-[#efeae1]/55 leading-relaxed max-w-xs">A small studio for homes, retreats, and quiet hospitality.</p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-[#efeae1]/50 mb-3">Studio</div>
          <ul className="space-y-2 normal-case tracking-normal text-[13px]">
            <li>Copenhagen \u00B7 DK</li><li>Byron Bay \u00B7 AU</li><li>Kyoto \u00B7 JP</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-[#efeae1]/50 mb-3">Follow</div>
          <ul className="space-y-2 normal-case tracking-normal text-[13px]">
            <li><a className="hover:text-[#efeae1]" href="#">Instagram</a></li>
            <li><a className="hover:text-[#efeae1]" href="#">Are.na</a></li>
            <li><a className="hover:text-[#efeae1]" href="#">Pinterest</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="text-[#efeae1]/50 mb-3">Letters \u2014 quarterly</div>
          <form onSubmit={(e: React.FormEvent) => e.preventDefault()} className="flex items-center gap-3 border-b border-white/20 pb-2">
            <input className="bg-transparent outline-none flex-1 normal-case tracking-normal text-[14px] placeholder:text-white/40" placeholder="your@address.com" />
            <button type="submit" className="text-[#efeae1]/90 hover:text-[#efeae1]">\u2192</button>
          </form>
        </div>
      </div>
      <div className="px-5 md:px-10 py-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-sans text-[11px] tracking-[0.22em] uppercase text-[#efeae1]/50">
        <span>\u00A9 2025 My Catchy Interiors \u2014 All quietly reserved</span>
        <span>Composed with <span className="italic-serif normal-case tracking-normal text-[#efeae1]/70">restraint</span> in CPH</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <LoadingScreen />
      <LenisProvider>
        <main className="grain relative">
          <Cursor />
          <Nav />
          <Hero />
          <Marquee />
          <Intro />
          <Work />
          <Studio />
          <Services />
          <Gallery />
          <Quote />
          <Journal />
          <Contact />
          <Footer />
        </main>
      </LenisProvider>
    </>
  )
}
