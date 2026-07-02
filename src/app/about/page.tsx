import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Factory, Globe, Award, Users, Target, Zap, Shield, Heart, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Xinke Solar</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            International solar mounting system solution manufacturer with 12GW annual production capacity.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Xinke Solar (Fujian Xinke New Energy Group Co., Ltd.) has grown to become one of Asia&apos;s leading manufacturers of solar mounting solutions. With headquarters in Xiamen and production bases in Xiamen and Zhangzhou, we serve customers in over 100 countries.
              </p>
              <p className="text-gray-600 mb-6">
                Our vertically integrated manufacturing capabilities include aluminum extrusion, anodizing, galvanized steel production, spiral pile manufacturing, and tracking system assembly. This enables us to deliver consistent quality and competitive pricing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '12GW+', label: 'Annual Capacity' },
                  { number: '100+', label: 'Countries Served' },
                  { number: '8', label: 'Global Branches' },
                  { number: '10+', label: 'Years Experience' },
                ].map((stat, i) => (
                  <div key={i} className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Factory className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                <p className="text-xl font-semibold text-blue-900">Xiamen & Zhangzhou</p>
                <p className="text-blue-700">Dual Production Bases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Global Presence</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            With branches and warehouses strategically located around the world, we provide local support and fast delivery to customers everywhere.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { region: 'Asia Pacific', offices: ['Xiamen, China (HQ)', 'Zhangzhou, China', 'Japan', 'Korea', 'Australia', 'Vietnam', 'Hong Kong'], highlight: '#1' },
              { region: 'Europe', offices: ['Germany', 'Netherlands'], highlight: '#1' },
              { region: 'Middle East', offices: ['Saudi Arabia'], highlight: '' },
              { region: 'Southeast Asia', offices: ['Vietnam', 'Malaysia'], highlight: '' },
            ].map((area, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4">{area.region}</h3>
                <ul className="space-y-2">
                  {area.offices.map((office, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {office}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Manufacturing Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: 'Aluminum Production', items: ['Aluminum extrusion', 'Anodizing', 'Cutting & machining', 'Assembly'] },
              { icon: Shield, title: 'Steel Production', items: ['Galvanized steel', 'ZAM coating', 'Carbon steel', 'Stainless steel'] },
              { icon: Zap, title: 'Ground Screws', items: ['Automated production', 'Hot-dip galvanizing', 'Quality testing', 'Custom lengths'] },
            ].map((cap, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item, j) => (
                    <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Awards</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'High-Tech Enterprise', desc: 'National Level' },
              { name: 'TÜV Certified', desc: 'Product Safety' },
              { name: 'CE Marking', desc: 'European Standards' },
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'Top 10 Supplier', desc: 'Industry Award' },
              { name: 'Innovation Award', desc: 'Provincial Level' },
              { name: 'Specialized Enterprise', desc: 'SMEs Recognition' },
              { name: 'Popular Brand', desc: 'Market Recognition' },
            ].map((cert, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-blue-200 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Quality First', desc: 'Rigorous quality control at every stage of production' },
              { icon: Globe, title: 'Global Vision', desc: 'Serving customers in 100+ countries worldwide' },
              { icon: Heart, title: 'Customer Focus', desc: '24/7 multi-language support and rapid response' },
              { icon: Users, title: 'Team Spirit', desc: '100+ engineers and professionals dedicated to your success' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner With Us</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Whether you are a solar installer, EPC contractor, or project developer, we are ready to be your trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact Our Team</Link>
            <Link href="/products" className="btn-secondary">View Our Products</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
