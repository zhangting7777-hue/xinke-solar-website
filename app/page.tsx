import Reveal from '@/components/Reveal'

const products = [
  {
    name: 'Roof Mount',
    desc: 'Rail and rail-less systems for tile, metal and flat roofs. Tested wind uplift performance.',
    href: '/products/roof-mount',
    image: '/images/kesen_full_p9.webp',
  },
  {
    name: 'Ground Mount',
    desc: 'Single-post and dual-post structures for utility and C&I projects, up to 60° terrain adaptability.',
    href: '/products/ground-mount',
    image: '/images/kesen_full_p16.webp',
  },
  {
    name: 'Carport',
    desc: 'Waterproof and standard carport structures for commercial parking, single and double row.',
    href: '/products/carport',
    image: '/images/kesen_full_p12.webp',
  },
  {
    name: 'Accessories',
    desc: 'Clamps, hooks, rails and grounding components, compatible with all major module brands.',
    href: '/products/accessories',
    image: '/images/kesen_full_p13.webp',
  },
]

const stats = [
  { value: '100+', label: 'Countries served' },
  { value: '12GW+', label: 'Annual capacity' },
  { value: 'ISO 9001', label: 'Certified factory' },
  { value: '25 yr', label: 'Structural warranty' },
]

const articles = [
  { title: 'Wind load calculation for rooftop PV arrays', href: '/knowledge/wind-load-calculation' },
  { title: 'Aluminum vs steel mounting: a structural comparison', href: '/knowledge/aluminum-vs-steel' },
  { title: 'How to choose a ground mount foundation', href: '/knowledge/ground-mount-foundation' },
]

export default function Home() {
  return (
    <main>
      {/* ---------- Nav ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded bg-primary-700 text-sm font-bold text-white">
              XK
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-slate-900">
              Xinke Solar
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="/products" className="hover:text-slate-900">Products</a>
            <a href="/projects" className="hover:text-slate-900">Projects</a>
            <a href="/knowledge" className="hover:text-slate-900">Knowledge Center</a>
            <a href="/about" className="hover:text-slate-900">About</a>
          </div>
          <a
            href="/contact"
            className="rounded bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Request Quote
          </a>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-slate-950">
        {/* 科盛/双恒光伏支架产品图 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shuangheng_full_p1.webp')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-100/80">
              Professional Solar Mounting Systems
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
              Precision Engineered Solar Mounting Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Roof, ground and carport structures — engineered, tested and delivered
              worldwide. OEM/ODM available with full documentation and technical support.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/products"
                className="rounded bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Explore products
              </a>
              <a
                href="/contact"
                className="rounded bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Request quote
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Proof in numbers ---------- */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 py-16 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="px-4 py-6 text-center md:text-left">
                <div className="tnum text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-500">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Product series ---------- */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Product Systems
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Complete range covering every commercial and utility installation scenario.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Reveal key={p.name}>
                <a
                  href={p.href}
                  className="group block overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-900">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                      View series →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Why Choose Xinke Solar
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Reveal>
              <div className="rounded-lg border border-slate-200 p-6">
                <div className="text-3xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold text-slate-900">Manufacturing Excellence</h3>
                <p className="mt-2 text-slate-600">
                  Two production bases in Fujian with automated equipment and strict quality control.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-lg border border-slate-200 p-6">
                <div className="text-3xl mb-4">📐</div>
                <h3 className="text-lg font-semibold text-slate-900">Engineering Support</h3>
                <p className="mt-2 text-slate-600">
                  Full structural calculations, wind/snow load analysis, and installation drawings.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-lg border border-slate-200 p-6">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold text-slate-900">Global Delivery</h3>
                <p className="mt-2 text-slate-600">
                  Exporting to 100+ countries with complete documentation for local compliance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Footer CTA ---------- */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Have a project? Send us the drawings.
            </h2>
            <p className="mt-2 text-primary-100">
              Structural review and quotation within 48 hours.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Request quote
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
          <span>© {new Date().getFullYear()} Xinke Solar. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
