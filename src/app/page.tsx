import Link from 'next/link';
import { ArrowRight, CheckCircle, Award, Clock, Shield, Users, Globe, Zap, Wrench, Factory, MapPin, Star, ChevronRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { Header, Footer } from '@/components/Header';
import { products } from '@/lib/products';

const features = [
  { icon: Factory, title: 'OEM/ODM', description: 'Custom design and manufacturing for your brand' },
  { icon: Clock, title: 'Fast Delivery', description: '48-hour detailed drawings, efficient production' },
  { icon: Shield, title: '25 Years Warranty', description: 'Industry-leading warranty on structural components' },
  { icon: Award, title: 'Certified', description: 'TÜV, CE, UL certified products' },
];

const whyChooseUs = [
  { title: '12GW+ Annual Capacity', description: 'One of the largest solar mounting manufacturers in Asia with two production bases' },
  { title: 'Global Export Experience', description: '100+ countries served, top market share in Japan, Korea, Europe and Australia' },
  { title: 'Complete Product Range', description: 'Roof mounts, ground mounts, carports, tracking systems, and all components' },
  { title: 'Engineering Support', description: 'Professional technical team providing project assessment and design services' },
];

const testimonials = [
  {
    name: 'Michael Johnson',
    company: 'SolarTech Australia',
    text: 'Xinke delivered 2MW of carport systems on time. The quality is exceptional and installation was straightforward.',
    rating: 5,
  },
  {
    name: 'Thomas Mueller',
    company: 'SunPower Germany',
    text: 'We have been working with Xinke for 3 years. Their tracking systems have excellent performance in European climates.',
    rating: 5,
  },
  {
    name: 'Kenji Tanaka',
    company: 'Green Energy Japan',
    text: 'Top quality and professional service. Xinke is our trusted partner for rooftop mounting systems.',
    rating: 5,
  },
];

// Beautiful high-quality solar images
const categoryImages = {
  roof: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
  ground: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=85',
  carport: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=1200&q=85',
  tracking: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&q=85',
  groundScrew: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
  components: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=85',
};

// FAQ data for SEO
const faqs = [
  { q: 'What types of solar mounting systems do you offer?', a: 'We offer comprehensive solar mounting solutions including roof mounts (color steel, tile, flat roof), ground mounts, solar carports, tracking systems, and all essential components like rails, clamps, and ground screws.' },
  { q: 'How long is your product warranty?', a: 'All our solar mounting products come with a 10-year warranty and a 25-year service life. We also offer extended warranty options for specific applications.' },
  { q: 'Do you provide OEM/ODM services?', a: 'Yes, we offer full OEM and ODM services. Our engineering team can design custom mounting solutions based on your specific requirements and brand needs.' },
  { q: 'What is your production capacity?', a: 'Our annual production capacity exceeds 12GW, making us one of the largest solar mounting manufacturers in Asia with two production bases in Xiamen and Zhangzhou.' },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-custom py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm">100+ Countries | 12GW+ Installed</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Solar Mounting<br />
              <span className="text-yellow-400">System Manufacturer</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Leading manufacturer of solar mounting solutions with 12GW annual capacity.
              From roof mounts to utility-scale tracking systems, we deliver quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900 flex items-center justify-center gap-2">
                View Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900 flex items-center justify-center gap-2">
                Get Free Quote <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 shadow-lg -mt-8 relative z-10 mx-4 lg:mx-auto max-w-6xl rounded-2xl">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete solar mounting solutions for every application, from residential rooftops to utility-scale solar farms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Roof Mounting Systems', desc: 'Color steel, tile, flat roof solutions', href: '/products/color-steel-roof-mount', img: categoryImages.roof },
              { title: 'Ground Mount Systems', desc: 'Galvanized, aluminum, adjustable mounts', href: '/products/ground-mount-system', img: categoryImages.ground },
              { title: 'Solar Carport', desc: 'Dual-purpose energy + shelter', href: '/products/solar-carport', img: categoryImages.carport },
              { title: 'Tracking Systems', desc: 'Single-axis & multi-point drive', href: '/products/solar-tracking-system', img: categoryImages.tracking },
              { title: 'Ground Screws', desc: 'Fast-install helical foundations', href: '/products/ground-screw', img: categoryImages.groundScrew },
              { title: 'Components', desc: 'Rails, clamps, hooks, accessories', href: '/products/solar-rail', img: categoryImages.components },
            ].map((category, index) => (
              <Link key={index} href={category.href} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={category.img} alt={category.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.desc}</p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600">High-quality mounting solutions trusted worldwide</p>
            </div>
            <Link href="/products" className="btn-secondary flex items-center gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature.substring(0, 30)}...
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-blue-600 font-medium text-sm">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Xinke Solar?
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              With 10+ years of experience and 12GW+ shipped globally, we are the trusted partner for solar mounting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  {index === 0 && <Factory className="w-6 h-6 text-gray-900" />}
                  {index === 1 && <Globe className="w-6 h-6 text-gray-900" />}
                  {index === 2 && <Zap className="w-6 h-6 text-gray-900" />}
                  {index === 3 && <Wrench className="w-6 h-6 text-gray-900" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Global Presence, Local Service
              </h2>
              <p className="text-gray-600 mb-8">
                With branches and warehouses in Germany, Netherlands, Japan, Korea, Australia, Hong Kong, Vietnam, Saudi Arabia, and Malaysia, we provide fast response and technical support to customers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '100+', label: 'Countries' },
                  { number: '12GW+', label: 'Total Shipped' },
                  { number: '8', label: 'Branches' },
                  { number: '2015', label: 'Founded' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Solar Installation"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-50"
              />
              <div className="relative text-center z-10">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-xl font-semibold text-blue-900">Headquarters: Xiamen, China</p>
                <p className="text-blue-700">Production Bases: Xiamen & Zhangzhou</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Trusted by solar installers and developers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Quick answers to common questions about our solar mounting products</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Solar Project?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quotation for your solar mounting needs. Our engineering team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Contact Us Now
            </Link>
            <a href="https://wa.me/8618367911260" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
