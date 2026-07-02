import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Building, Factory, Warehouse, Home, Store, Heart } from 'lucide-react';

const solutions = [
  {
    icon: Factory,
    title: 'Factory & Industrial',
    description: 'Large-scale solar installations for manufacturing facilities and industrial complexes.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    features: ['High wind load capacity', 'Corrosion resistant', 'Easy maintenance'],
    capacity: '500kW - 50MW',
  },
  {
    icon: Warehouse,
    title: 'Warehouse & Logistics',
    description: 'Rooftop and ground-mounted solutions for warehouses and distribution centers.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    features: ['Flat roof compatible', 'Ballasted options', 'Fast installation'],
    capacity: '100kW - 20MW',
  },
  {
    icon: Home,
    title: 'Residential',
    description: 'Home solar mounting solutions that blend aesthetics with functionality.',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
    features: ['Aesthetic design', 'Tile roof hooks', 'Easy installation'],
    capacity: '5kW - 30kW',
  },
  {
    icon: Store,
    title: 'Commercial Buildings',
    description: 'Solar solutions for offices, shopping centers, and commercial properties.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    features: ['Standing seam clamps', 'Penetration-free options', 'BIPV compatible'],
    capacity: '50kW - 5MW',
  },
  {
    icon: Building,
    title: 'Agricultural',
    description: 'Solar canopies for farms, poultry farms, and agricultural facilities.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    features: ['Ground screw foundation', 'Multi-row configurations', 'Agricultural compatible'],
    capacity: '200kW - 10MW',
  },
  {
    icon: Heart,
    title: 'Carport & Parking',
    description: 'Dual-purpose solar carports for parking lots and charging stations.',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
    features: ['Vehicle shade', 'EV charging integration', 'Aesthetic design'],
    capacity: '50kW - 5MW',
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Solutions for<br />
              <span className="text-yellow-400">Every Application</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From residential rooftops to utility-scale solar farms, we provide customized mounting solutions for your specific needs.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Custom Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-3">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Capacity Range:</span>
                    <span className="ml-2 font-semibold text-blue-600">{solution.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your project requirements and site conditions' },
              { step: '02', title: 'Design', desc: 'Our engineers create customized mounting solutions' },
              { step: '03', title: 'Production', desc: 'Manufacturing with strict quality control' },
              { step: '04', title: 'Delivery', desc: 'Fast shipping with installation support' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our engineering team is ready to help you design the perfect solar mounting system for your project.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Contact Our Engineers
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
