import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Award, Shield, CheckCircle, FileText, Badge } from 'lucide-react';

const certifications = [
  {
    name: 'TÜV Rheinland',
    description: 'Product Safety Certification',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    validUntil: '2026',
  },
  {
    name: 'CE Marking',
    description: 'European Conformity',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    validUntil: '2026',
  },
  {
    name: 'UL Certification',
    description: 'Underwriters Laboratories',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
    validUntil: '2025',
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    validUntil: '2026',
  },
  {
    name: 'IEC 61215',
    description: 'Solar Panel Standards',
    icon: CheckCircle,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    validUntil: '2026',
  },
  {
    name: 'AS/NZS 1170',
    description: 'Australian/New Zealand Standards',
    icon: Badge,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    validUntil: '2025',
  },
];

const awards = [
  { name: 'National High-Tech Enterprise', year: '2024' },
  { name: 'Top 10 Solar Mounting Suppliers', year: '2024' },
  { name: 'Most Popular Solar Brand', year: '2023' },
  { name: 'Innovation Excellence Award', year: '2023' },
  { name: 'Specialized SME Recognition', year: '2022' },
  { name: 'Quality Excellence Award', year: '2022' },
];

const qualityStandards = [
  'Raw material inspection before production',
  'In-process quality control at every stage',
  'Final product testing and inspection',
  'Third-party laboratory verification',
  'ISO 9001 certified quality management',
  'Continuous improvement programs',
];

export default function CertificatesPage() {
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
              Certifications & <span className="text-yellow-400">Awards</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our commitment to quality is backed by international certifications and industry recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">International Certifications</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            All our products meet or exceed international standards for safety, quality, and performance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-2">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Valid until {cert.validUntil}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-gray-600 mb-8">
                Our rigorous quality control system ensures every product meets the highest standards before leaving our factory.
              </p>
              <div className="space-y-4">
                {qualityStandards.map((standard, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Quality Control"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">99.8%</div>
                    <div className="text-sm text-gray-600">Pass Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">Awards & Recognition</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our excellence has been recognized by industry leaders and government organizations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{award.name}</h3>
                    <p className="text-sm text-gray-500">{award.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Download Certificates</h2>
              <p className="text-blue-200">
                Request our complete certification package including test reports and compliance documentation.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors whitespace-nowrap">
              <FileText className="w-5 h-5 mr-2" />
              Request Certificates
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
