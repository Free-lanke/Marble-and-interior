'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import LenisProvider from '@/components/lenis-provider'
import Cursor from '@/components/cursor'
import Magnetic from '@/components/magnetic'
import { FadeUp, WordReveal, ImageReveal } from '@/components/reveal'

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

const PROJECTS = [
  { id: '01', title: 'Maison Clair', place: 'Provence, FR', year: '2024', tag: 'Residence', img: IMAGES.p1, w: 'md:col-span-7', h: 'aspect-[4/5] md:aspect-[5/6]' },
  { id: '02', title: 'Linen House', place: 'Byron Bay, AU', year: '2024', tag: 'Retreat', img: IMAGES.p3, w: 'md:col-span-5', h: 'aspect-[4/5] md:aspect-[4/5]' },
  { id: '03', title: 'Nocturne Kitchen', place: 'Copenhagen, DK', year: '2023', tag: 'Residence', img: IMAGES.p4, w: 'md:col-span-5', h: 'aspect-[4/5]' },
  { id: '04', title: 'The Orchard Suite', place: 'Kyoto, JP', year: '2023', tag: 'Hospitality', img: IMAGES.p5, w: 'md:col-span-7', h: 'aspect-[4/5] md:aspect-[6/5]' },
  { id: '05', title: 'Quiet Bath', place: 'Lisbon, PT', year: '2023', tag: 'Residence', img: IMAGES.p6, w: 'md:col-span-6', h: 'aspect-[4/5]' },
  { id: '06', title: 'Pages & Palms', place: 'Marrakech, MA', year: '2022', tag: 'Retreat', img: IMAGES.p7, w: 'md:col-span-6', h: 'aspect-[4/5]' },
]

const SERVICES = [
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
  const links = [['Work', '#work'], ['Studio', '#studio'], ['Services', '#services'], ['Journal', '#journal'], ['Contact', '#contact']]
  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled ? 'backdrop-blur-md bg-[#efeae1]/70 border-b border-[#1a1a1a]/10' : ''}`}
      >
        <div className="px-5 md:px-10 py-5 md:py-6 flex items-center justify-between">
          <a href="#top" className="font-serif text-lg md:text-xl tracking-tight leading-none">
            My Catchy <span className="italic-serif">Interiors</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-sans text-[13px] uppercase tracking-[0.18em]">
            {links.map(([l, h]) => (
              <a key={l} href={h} data-cursor="\u2192" className="relative group">
                <span className="inline-block">{l}</span>
                <span className="absolute left-0 -bottom-1 h-px w-full origin-right scale-x-0 bg-[#1a1a1a] transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <Magnetic>
            <button onClick={() => setOpen(true)} className="font-sans text-[12px] uppercase tracking-[0.2em] border border-[#1a1a1a] rounded-full px-4 md:px-5 py-2 md:py-2.5 hover:bg-[#1a1a1a] hover:text-[#f5f1e8] transition-colors duration-500" data-cursor="Say hi">
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
  const ref = useRef(null)
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
    <section className="py-10 md:py-14 border-y border-[#1a1a1a]/15 overflow-hidden bg-[#efeae1]">
      <div className="flex marquee whitespace-nowrap">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16">
            {words.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-10 md:gap-16">
                <span className={`font-serif text-4xl md:text-6xl tracking-tight ${i % 3 === 1 ? 'italic-serif' : ''}`}>{w}</span>
                <Plus className="w-4 h-4 opacity-50" />
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
    <section className="px-5 md:px-10 py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] mb-10 md:mb-16">
          <span className="w-8 h-px bg-[var(--muted)]" />
          <span>A studio, not a showroom</span>
        </div>
        <h2 className="font-serif text-[10vw] md:text-[5.2vw] leading-[1] tracking-tight">
          <FadeUp><span>We design for the way a morning</span></FadeUp>
          <FadeUp delay={0.1}><span>actually <span className="italic-serif">unfolds</span> \u2014 the light, the</span></FadeUp>
          <FadeUp delay={0.2}><span>first cup, the pause before the</span></FadeUp>
          <FadeUp delay={0.3}><span>door opens.</span></FadeUp>
        </h2>
      </div>
    </section>
  )
}

function ProjectCard({ p, i }) {
  return (
    <div className={`${p.w} col-span-12`}>
      <FadeUp delay={(i % 2) * 0.1}>
        <a href="#" className="group block">
          <div className={`relative overflow-hidden ${p.h}`} data-cursor="View">
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
  const ref = useRef(null)
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
            <motion.div style={{ y: y2 }} className="aspect-[4/5] overflow-hidden">
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
  return (
    <section id="services" className="px-5 md:px-10 py-24 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <div>
            <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] mb-4">
              <span className="w-8 h-px bg-[var(--muted)]" /> What we do
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight">Services, <span className="italic-serif">unhurried.</span></h2>
          </div>
        </div>
        <div className="divide-y divide-[#1a1a1a]/15 border-y border-[#1a1a1a]/15">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.no} delay={i * 0.05}>
              <div className="group grid grid-cols-12 gap-4 md:gap-10 py-8 md:py-10 cursor-default" data-cursor={s.no}>
                <div className="col-span-2 md:col-span-1 font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--muted)] pt-2">{s.no}</div>
                <h3 className="col-span-10 md:col-span-5 font-serif text-3xl md:text-5xl tracking-tight">
                  <span className="inline-block transition-transform duration-700 group-hover:translate-x-3">
                    {s.t.split(' ').map((w, j, arr) => (
                      <span key={j} className={j === arr.length - 1 ? 'italic-serif' : ''}>{w}{j < arr.length - 1 ? ' ' : ''}</span>
                    ))}
                  </span>
                </h3>
                <p className="col-span-12 md:col-span-5 md:col-start-8 font-sans text-[14px] leading-[1.85] text-[var(--muted)]">{s.d}</p>
                <div className="col-span-12 md:col-span-1 flex md:justify-end">
                  <Plus className="w-5 h-5 transition-transform duration-700 group-hover:rotate-180" />
                </div>
              </div>
            </FadeUp>
          ))}
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
  return (
    <section className="px-5 md:px-10 py-24 md:py-40 border-t border-[#1a1a1a]/10">
      <div className="max-w-5xl mx-auto text-center">
        <FadeUp>
          <p className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight">
            <span className="italic-serif">\u201C</span>They moved through our home the way they draw \u2014
            slowly, quietly, and with a kind of <span className="italic-serif">certainty</span> that made every decision feel inevitable.<span className="italic-serif">\u201D</span>
          </p>
        </FadeUp>
        <FadeUp delay={0.2} className="mt-10 flex items-center justify-center gap-4 font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
          <span className="w-10 h-px bg-[var(--muted)]" />
          <span>Eloise & Marten \u2014 Maison Clair</span>
          <span className="w-10 h-px bg-[var(--muted)]" />
        </FadeUp>
      </div>
    </section>
  )
}

function Journal() {
  const posts = [
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
              <div className="overflow-hidden aspect-[4/5]">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" />
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
    <section id="contact" className="relative bg-[#1a1a1a] text-[#efeae1] overflow-hidden">
      <div className="px-5 md:px-10 py-24 md:py-40 text-center">
        <FadeUp>
          <div className="flex items-center justify-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[#efeae1]/60 mb-10">
            <span className="w-8 h-px bg-[#efeae1]/60" /> Begin a conversation <span className="w-8 h-px bg-[#efeae1]/60" />
          </div>
        </FadeUp>
        <h2 className="font-serif text-[13vw] md:text-[9vw] leading-[0.92] tracking-tight">
          <FadeUp><span>Let\u2019s make a</span></FadeUp>
          <FadeUp delay={0.1}><span>quiet, <span className="italic-serif">considered</span></span></FadeUp>
          <FadeUp delay={0.2}><span>room together.</span></FadeUp>
        </h2>
        <FadeUp delay={0.3} className="mt-14 flex justify-center">
          <Magnetic strength={0.4}>
            <a href="mailto:hello@mycatchyinteriors.com" data-cursor="Write us"
              className="group relative flex items-center justify-center w-44 h-44 md:w-56 md:h-56 rounded-full bg-[#efeae1] text-[#1a1a1a] hover:bg-[#d6cdb8] transition-colors duration-700">
              <span className="font-sans uppercase tracking-[0.24em] text-[12px]">Say hello</span>
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 group-hover:rotate-45 transition-transform duration-700" />
            </a>
          </Magnetic>
        </FadeUp>
        <FadeUp delay={0.5}>
          <a href="mailto:hello@mycatchyinteriors.com" className="mt-10 inline-block font-serif text-xl md:text-3xl italic-serif underline underline-offset-8 decoration-1">hello@mycatchyinteriors.com</a>
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
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3 border-b border-white/20 pb-2">
            <input className="bg-transparent outline-none flex-1 normal-case tracking-normal text-[14px] placeholder:text-white/40" placeholder="your@address.com" />
            <button className="text-[#efeae1]/90 hover:text-[#efeae1]">\u2192</button>
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
  )
}
