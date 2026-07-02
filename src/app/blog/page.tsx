import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    slug: 'how-to-choose-solar-mounting-rails',
    title: 'How to Choose the Right Solar Mounting Rails',
    excerpt: 'A comprehensive guide to selecting solar rails based on material, load capacity, and installation requirements.',
    date: '2025-01-15',
    author: 'Technical Team',
    readTime: '8 min read',
    category: 'Technical Guide',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
  },
  {
    slug: 'solar-ground-mount-vs-roof-mount',
    title: 'Solar Ground Mount vs Roof Mount: Which is Better?',
    excerpt: 'Compare the advantages and disadvantages of ground-mounted and roof-mounted solar systems to make the right choice.',
    date: '2025-01-10',
    author: 'Technical Team',
    readTime: '6 min read',
    category: 'Comparison',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    slug: 'solar-mounting-wind-load-calculation',
    title: 'Understanding Solar Mounting Wind Load Calculations',
    excerpt: 'Learn how wind load affects solar panel installations and how to ensure your mounting system meets local standards.',
    date: '2025-01-05',
    author: 'Engineering Team',
    readTime: '10 min read',
    category: 'Technical Guide',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
  },
  {
    slug: 'aluminum-vs-steel-solar-mounting',
    title: 'Aluminum vs Steel Solar Mounting: Material Comparison',
    excerpt: 'Compare aluminum and steel mounting systems in terms of corrosion resistance, weight, cost, and applications.',
    date: '2024-12-28',
    author: 'Technical Team',
    readTime: '7 min read',
    category: 'Materials',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
  },
  {
    slug: 'ground-screw-installation-guide',
    title: 'Complete Guide to Ground Screw Installation',
    excerpt: 'Step-by-step instructions for installing ground screws for solar mounting systems in various soil conditions.',
    date: '2024-12-20',
    author: 'Installation Team',
    readTime: '12 min read',
    category: 'Installation',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
  },
  {
    slug: 'solar-tracking-system-benefits',
    title: 'Benefits of Solar Tracking Systems for Large-Scale Projects',
    excerpt: 'Discover how single-axis and dual-axis trackers can increase energy yield by 25-45% compared to fixed-tilt systems.',
    date: '2024-12-15',
    author: 'Technical Team',
    readTime: '9 min read',
    category: 'Tracking',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
];

const categories = ['All', 'Technical Guide', 'Comparison', 'Materials', 'Installation', 'Tracking'];

export default function BlogPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solar Mounting Blog</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Expert insights, technical guides, and industry news for solar professionals and enthusiasts.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container-custom">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 lg:h-auto bg-gray-200">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <span className="inline-flex items-center text-blue-600 font-medium">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Get the latest solar mounting insights, product updates, and industry news delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button type="submit" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
