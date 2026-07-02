import type { Metadata } from 'next';
import { Header, Footer } from '@/components/Header';
import { products } from '@/lib/products';
import { ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Complete range of solar mounting solutions: roof mounts, ground mounts, solar carports, tracking systems, and components. OEM/ODM available.',
};

export default function ProductsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solar Mounting Products</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Complete range of solar mounting solutions for roof, ground, carport, and tracking applications.
            OEM/ODM available for custom projects.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Roof Mount', href: '/products/color-steel-roof-mount' },
              { name: 'Ground Mount', href: '/products/ground-mount-system' },
              { name: 'Carport', href: '/products/solar-carport' },
              { name: 'Tracking', href: '/products/solar-tracking-system' },
              { name: 'Components', href: '/products/solar-rail' },
            ].map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center font-medium text-gray-900"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.applications.slice(0, 3).map((app, i) => (
                      <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-blue-600 font-medium">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            We offer OEM/ODM services for custom solar mounting projects. Contact our engineering team for technical support.
          </p>
          <a href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Request Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
