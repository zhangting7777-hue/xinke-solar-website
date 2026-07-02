import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { FileText, Download, Book, Settings, Shield, Award, ChevronRight } from 'lucide-react';

const downloads = [
  {
    category: 'Product Catalogs',
    icon: Book,
    items: [
      { name: 'Complete Product Catalog 2025', size: '15 MB', format: 'PDF' },
      { name: 'Roof Mounting Systems Catalog', size: '8 MB', format: 'PDF' },
      { name: 'Ground Mount Systems Catalog', size: '10 MB', format: 'PDF' },
      { name: 'Solar Carport Solutions', size: '6 MB', format: 'PDF' },
      { name: 'Tracking Systems Guide', size: '5 MB', format: 'PDF' },
    ],
  },
  {
    category: 'Technical Datasheets',
    icon: Settings,
    items: [
      { name: 'Color Steel Roof Mount Datasheet', size: '2 MB', format: 'PDF' },
      { name: 'Ground Screw Technical Specs', size: '3 MB', format: 'PDF' },
      { name: 'Solar Rail Profiles', size: '2 MB', format: 'PDF' },
      { name: 'Ballast System Specifications', size: '2 MB', format: 'PDF' },
      { name: 'Tracking System Data Sheet', size: '4 MB', format: 'PDF' },
    ],
  },
  {
    category: 'Installation Guides',
    icon: FileText,
    items: [
      { name: 'Roof Mount Installation Manual', size: '5 MB', format: 'PDF' },
      { name: 'Ground Screw Installation Guide', size: '3 MB', format: 'PDF' },
      { name: 'Solar Rail Assembly Instructions', size: '2 MB', format: 'PDF' },
      { name: 'Tracking System Setup Guide', size: '6 MB', format: 'PDF' },
      { name: 'Carport Installation Manual', size: '4 MB', format: 'PDF' },
    ],
  },
  {
    category: 'Certificates & Reports',
    icon: Shield,
    items: [
      { name: 'ISO 9001 Certificate', size: '1 MB', format: 'PDF' },
      { name: 'TÜV Test Reports', size: '3 MB', format: 'PDF' },
      { name: 'CE Declaration of Conformity', size: '1 MB', format: 'PDF' },
      { name: 'Material Test Reports', size: '5 MB', format: 'PDF' },
      { name: 'Wind Load Analysis', size: '4 MB', format: 'PDF' },
    ],
  },
  {
    category: 'Design Tools',
    icon: Award,
    items: [
      { name: 'Product Selection Guide', size: '2 MB', format: 'PDF' },
      { name: 'Load Calculator Spreadsheet', size: '1 MB', format: 'XLSX' },
      { name: 'AutoCAD Drawings Package', size: '25 MB', format: 'ZIP' },
      { name: '3D Models (STEP Files)', size: '50 MB', format: 'ZIP' },
      { name: 'BIM Objects', size: '30 MB', format: 'ZIP' },
    ],
  },
];

export default function DownloadsPage() {
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
              Download <span className="text-yellow-400">Center</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Access our complete library of product catalogs, technical documents, and certification files.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Request Custom Documents
            </Link>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {downloads.map((category, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Document Name</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700">Format</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700">Size</th>
                      <th className="text-right py-4 px-6 font-semibold text-gray-700">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-900">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                            {item.format}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-500 text-sm">
                          {item.size}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Request Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You Need?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Contact our technical team for custom documents, specific datasheets, or project-specific documentation.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Contact Technical Team
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
