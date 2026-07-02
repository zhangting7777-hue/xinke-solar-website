import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { MapPin, Calendar, Zap, Globe } from 'lucide-react';

const projects = [
  {
    title: '5MW Industrial Rooftop Solar Project',
    location: 'Bangkok, Thailand',
    date: '2024-12',
    capacity: '5MW',
    type: 'Roof Mount',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    description: 'Large-scale rooftop installation on industrial factory with color steel roof mounting system.',
  },
  {
    title: '2MW Commercial Carport',
    location: 'Sydney, Australia',
    date: '2024-11',
    capacity: '2MW',
    type: 'Carport',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
    description: 'Solar carport providing shade for commercial parking while generating clean energy.',
  },
  {
    title: '10MW Ground Mount Solar Farm',
    location: 'Dubai, UAE',
    date: '2024-10',
    capacity: '10MW',
    type: 'Ground Mount',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    description: 'Desert solar farm with specialized ground screws and tracking systems.',
  },
  {
    title: '3MW Agricultural Solar Canopy',
    location: 'Nanjing, China',
    date: '2024-09',
    capacity: '3MW',
    type: 'Agricultural',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    description: 'Agricultural solar canopy providing shade for crops while generating electricity.',
  },
  {
    title: '1.5MW Residential Complex',
    location: 'Tokyo, Japan',
    date: '2024-08',
    capacity: '1.5MW',
    type: 'Roof Mount',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    description: 'Residential apartment complex with integrated solar roofing system.',
  },
  {
    title: '8MW Solar Tracking System',
    location: 'Madrid, Spain',
    date: '2024-07',
    capacity: '8MW',
    type: 'Tracking',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    description: 'Utility-scale solar farm with AI-powered single-axis tracking systems.',
  },
  {
    title: '500kW Flat Roof Ballast System',
    location: 'Hamburg, Germany',
    date: '2024-06',
    capacity: '500kW',
    type: 'Roof Mount',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
    description: 'Penetration-free ballast system for historic building rooftop.',
  },
  {
    title: '12MW Solar Farm',
    location: 'Texas, USA',
    date: '2024-05',
    capacity: '12MW',
    type: 'Ground Mount',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    description: 'Large-scale solar installation with ground screw foundations.',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '3GW+', label: 'Total Capacity' },
  { value: '50+', label: 'Countries' },
  { value: '100%', label: 'Customer Satisfaction' },
];

export default function ProjectsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-yellow-400">Projects</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Over 500 successful solar installations worldwide, totaling more than 3GW of clean energy capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                      {project.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Global Reach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our solar mounting solutions are installed in over 50 countries across 5 continents.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 text-center">
            <Globe className="w-24 h-24 text-blue-600 mx-auto mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {['Asia Pacific', 'Europe', 'North America', 'Middle East', 'Africa'].map((region, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                  <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                  <span className="font-semibold text-gray-900">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Project Today</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Let us help you design and implement the perfect solar mounting solution for your next project.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
