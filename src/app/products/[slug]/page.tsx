import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/Header';
import { products, getProductBySlug } from '@/lib/products';
import { CheckCircle, Download, ArrowLeft, Mail, Phone, FileText, Settings, Wrench, MapPin } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-blue-600">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>

            {/* Info */}
            <div>
              <div className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" /> Get Quote
                </Link>
                {product.downloadUrl && (
                  <button className="btn-secondary flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" /> Download Datasheet
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-medium text-gray-700 border-b border-gray-100">{spec.label}</td>
                    <td className="py-4 px-6 text-gray-900 border-b border-gray-100">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Download Resources</h2>
              <p className="text-blue-200 mb-6">
                Get detailed technical documents, installation guides, and product catalogs for your engineering team.
              </p>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-lg transition-colors">
                  <FileText className="w-6 h-6" />
                  <span>Product Catalog (PDF)</span>
                </button>
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-lg transition-colors">
                  <Settings className="w-6 h-6" />
                  <span>Technical Datasheet</span>
                </button>
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-lg transition-colors">
                  <Wrench className="w-6 h-6" />
                  <span>Installation Manual</span>
                </button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Need Technical Support?</h3>
              <p className="text-blue-200 mb-6">Our engineering team can provide customized solutions and technical documentation.</p>
              <Link href="/contact" className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Contact Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <Link key={rel.id} href={`/products/${rel.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image src={rel.images[0]} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{rel.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{rel.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {[
              { q: `What is the warranty for ${product.name}?`, a: 'Our products come with a 10-year warranty and 25-year service life. Specific warranty terms depend on the application and environmental conditions.' },
              { q: 'Can you provide custom design?', a: 'Yes, we offer OEM/ODM services. Our engineering team can provide customized solutions based on your project requirements.' },
              { q: 'What is the lead time?', a: 'Standard products: 2-4 weeks. Custom products: 4-8 weeks depending on the complexity and order quantity.' },
              { q: 'Do you provide installation support?', a: 'Yes, we offer technical documentation, installation guides, and on-site support for large projects.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
