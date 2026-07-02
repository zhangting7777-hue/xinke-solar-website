export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
  applications: string[];
  downloadUrl?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'color-steel-roof-mount',
    name: 'Color Steel Roof Mounting System',
    category: 'Roof Mount',
    shortDescription: 'Professional mounting solutions for various corrugated metal roofs with proven reliability.',
    description: 'Our Color Steel Roof Mounting System is designed for corrugated metal roofs, featuring pre-assembled components for fast installation. Made from high-quality aluminum AL6005-T5 and SUS304 stainless steel, these mounts provide excellent corrosion resistance and long-term durability.',
    features: [
      'Pre-assembled components for rapid installation',
      'High corrosion resistance with AL6005-T5 aluminum',
      'SUS304 stainless steel hardware for superior strength',
      'Compatible with framed and frameless modules',
      'Meets AS/NZS 1170, JISC8955-2017 standards',
      '10-year warranty with 25-year service life',
    ],
    specifications: [
      { label: 'Material', value: 'Aluminum AL6005-T5, Stainless Steel SUS304' },
      { label: 'Standards', value: 'AS/NZS 1170, JISC8955-2017' },
      { label: 'Warranty', value: '10 Years' },
      { label: 'Service Life', value: '25 Years' },
      { label: 'Application', value: 'Corrugated Metal Roof' },
    ],
    images: [
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
      'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
    ],
    applications: ['Industrial Buildings', 'Commercial Warehouses', 'Agricultural Facilities'],
  },
  {
    id: '2',
    slug: 'flat-roof-ballast-system',
    name: 'Flat Roof Ballast Mounting System',
    category: 'Roof Mount',
    shortDescription: 'Cost-effective ballasted solution for flat concrete rooftops without penetration.',
    description: 'The Flat Roof Ballast Mounting System uses counterweights to secure solar panels on flat roofs without roof penetration. This solution minimizes structural stress and is ideal for rooftop solar installations where drilling is not permitted.',
    features: [
      'No roof penetration required',
      'Pre-assembled delivery for quick installation',
      'Flexible design for various roof configurations',
      'Carbon steel and aluminum AL6005-T5 materials',
      'S350GD-ZAM275 zinc-aluminum-magnesium coating',
      'Wind tunnel tested for stability',
    ],
    specifications: [
      { label: 'Material', value: 'Carbon Steel Q235B, Aluminum AL6005-T5, ZAM275' },
      { label: 'Standards', value: 'AS/NZS 1170, JISC8955-2017' },
      { label: 'Warranty', value: '10 Years' },
      { label: 'Installation', value: 'No Roof Penetration' },
      { label: 'Application', value: 'Flat Concrete Roofs' },
    ],
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    ],
    applications: ['Commercial Buildings', 'Industrial Plants', 'Parking Structures'],
  },
  {
    id: '3',
    slug: 'ground-mount-system',
    name: 'Ground Mounting System',
    category: 'Ground Mount',
    shortDescription: 'Heavy-duty ground-mounted solar solutions for utility-scale and commercial projects.',
    description: 'Our Ground Mounting Systems are engineered for large-scale solar installations on various terrain types. From galvanized aluminum-magnesium to full aluminum solutions, we offer configurations to match any project requirements and soil conditions.',
    features: [
      'Multiple configurations: galvanized, aluminum, hybrid',
      'Spiral pile foundation for easy installation',
      'Customizable spacing and tilt angles',
      'Corrosion-resistant hot-dip galvanized coating',
      'Suitable for various soil conditions',
      'Scalable from residential to utility-scale',
    ],
    specifications: [
      { label: 'Material', value: 'Galvanized Steel, Aluminum AL6005-T5, ZAM275' },
      { label: 'Capacity', value: 'Up to GW scale projects' },
      { label: 'Foundation', value: 'Spiral Piles, Concrete Piles, Ground Screws' },
      { label: 'Warranty', value: '10 Years' },
      { label: 'Service Life', value: '25+ Years' },
    ],
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    ],
    applications: ['Solar Farms', 'Agricultural Solar', 'Industrial Parks', 'Desert Installations'],
  },
  {
    id: '4',
    slug: 'solar-carport',
    name: 'Solar Carport System',
    category: 'Carport',
    shortDescription: 'Dual-purpose carports generating clean energy while providing vehicle shelter.',
    description: 'Solar Carports combine renewable energy generation with practical vehicle protection. Our aluminum and carbon steel carport systems are designed for easy installation and long-term durability in all weather conditions.',
    features: [
      'Dual purpose: energy generation + vehicle shelter',
      'Aluminum and carbon steel construction',
      'Pre-assembled components for fast deployment',
      'Customizable dimensions for various vehicle sizes',
      'Excellent corrosion resistance',
      'Aesthetic design blending with architecture',
    ],
    specifications: [
      { label: 'Material', value: 'Aluminum AL6005-T5, Carbon Steel Q235B' },
      { label: 'Finish', value: 'Anodized Aluminum, Hot-dip Galvanized Steel' },
      { label: 'Warranty', value: '10 Years' },
      { label: 'Snow Load', value: 'Up to 1.6kPa' },
      { label: 'Wind Speed', value: 'Up to 60m/s' },
    ],
    images: [
      'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    ],
    applications: ['Commercial Parking Lots', 'Residential Garages', 'Public Charging Stations'],
  },
  {
    id: '5',
    slug: 'solar-rail',
    name: 'Solar Mounting Rail',
    category: 'Components',
    shortDescription: 'High-strength aluminum rails for secure solar panel mounting.',
    description: 'Our Solar Mounting Rails are manufactured from high-strength aluminum AL6005-T5, featuring excellent corrosion resistance and structural integrity. Available in various profiles for different load requirements.',
    features: [
      'High-strength aluminum AL6005-T5',
      'Lightweight yet robust construction',
      'Smooth surface, aesthetically pleasing',
      'Multiple profile sizes available',
      'Mill finish or anodized options',
      'Pre-punched mounting slots',
    ],
    specifications: [
      { label: 'Material', value: 'Aluminum AL6005-T5' },
      { label: 'Tensile Strength', value: '≥260 MPa' },
      { label: 'Yield Strength', value: '≥240 MPa' },
      { label: 'Surface', value: 'Mill Finish / Anodized' },
      { label: 'Length', value: 'Standard: 3m / Custom lengths available' },
    ],
    images: [
      'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    ],
    applications: ['Roof Mount Systems', 'Ground Mount Systems', 'Carport Structures'],
  },
  {
    id: '6',
    slug: 'ground-screw',
    name: 'Ground Screw Foundation',
    category: 'Ground Mount',
    shortDescription: 'Fast-install helical ground screws replacing traditional concrete foundations.',
    description: 'Ground Screws provide a fast, cost-effective foundation solution for ground-mounted solar systems. Our automated production line ensures consistent quality with hot-dip galvanization for maximum corrosion protection.',
    features: [
      'No concrete required - instant foundation',
      'Automated production for consistent quality',
      'Hot-dip galvanized coating (>80μm)',
      'Load capacity: 6.5kN to 119.8kN',
      'Diameter: 76mm to 114mm',
      'Length: 1000mm to 3000mm',
      'Soil adaptability assessment available',
    ],
    specifications: [
      { label: 'Material', value: 'Carbon Steel Q235B (equivalent to JIS SS400)' },
      { label: 'Pipe Diameter', value: '76 / 89 / 102 / 114mm' },
      { label: 'Wall Thickness', value: '3-3.5mm' },
      { label: 'Galvanizing', value: '>80μm hot-dip galvanized' },
      { label: 'Standards', value: 'GB/T709-2006' },
      { label: 'Pull-out Strength', value: '6.5kN - 119.8kN' },
    ],
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    ],
    applications: ['Ground Mount Systems', 'Fence Foundations', 'Sign Posts', 'Temporary Structures'],
  },
  {
    id: '7',
    slug: 'solar-clamp',
    name: 'Solar Panel Clamps',
    category: 'Components',
    shortDescription: 'Premium clamps for secure panel mounting on rails.',
    description: 'Our range of solar clamps includes mid clamps, end clamps, and frame clamps for various panel types. Manufactured from SUS304 stainless steel and aluminum for maximum durability.',
    features: [
      'Mid clamps and end clamps available',
      'SUS304 stainless steel construction',
      'Compatible with 30-50mm frame thickness',
      'Pre-assembled hardware included',
      'Electrical continuity ensured',
      'Quick and easy installation',
    ],
    specifications: [
      { label: 'Material', value: 'SUS304 Stainless Steel, Aluminum' },
      { label: 'Frame Thickness', value: '30-50mm' },
      { label: 'Finish', value: 'Mill Finish / Black Anodized' },
      { label: 'Standards', value: 'AS/NZS 1170' },
    ],
    images: [
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
      'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
    ],
    applications: ['All Mounting Systems', 'Residential', 'Commercial', 'Utility'],
  },
  {
    id: '8',
    slug: 'solar-hook',
    name: 'Roof Hook Mounts',
    category: 'Roof Mount',
    shortDescription: 'Versatile hooks for tile and slate roof solar installations.',
    description: 'Solar Roof Hooks provide secure attachment points for solar panels on tile and slate roofs. Our hooks feature adjustable designs and excellent waterproofing properties.',
    features: [
      'Adjustable design for various roof types',
      'Excellent waterproofing performance',
      'SUS304 stainless steel hardware',
      'Pre-assembled with sealing washers',
      'Compatible with most rail systems',
      'Quick height adjustment',
    ],
    specifications: [
      { label: 'Material', value: 'Aluminum AL6005-T5, SUS304' },
      { label: 'Adjustment', value: 'Height and angle adjustable' },
      { label: 'Standards', value: 'AS/NZS 1170, JISC8955-2017' },
      { label: 'Warranty', value: '10 Years' },
    ],
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    ],
    applications: ['Tile Roofs', 'Slate Roofs', 'Shingle Roofs'],
  },
  {
    id: '9',
    slug: 'solar-tracking-system',
    name: 'Solar Tracking System',
    category: 'Tracking',
    shortDescription: 'Single and dual-axis trackers maximizing energy yield by 25-45%.',
    description: 'Our Smart Tracking Systems use AI algorithms to follow the sun throughout the day, significantly increasing energy production. Available in single-axis (KST-1P) and multi-point drive (KST-2PM) configurations.',
    features: [
      'AI-powered sun tracking algorithms',
      'Single-axis and multi-point drive options',
      'Compatible with 210mm large format modules',
      'Adaptable to terrain with up to 10-20% slope',
      'Smart maintenance with remote monitoring',
      '25-45% energy yield increase',
    ],
    specifications: [
      { label: 'Tracking Type', value: 'Single-axis / Multi-point drive' },
      { label: 'Module Compatibility', value: '210mm large format' },
      { label: 'Terrain Adaptation', value: 'Up to 10-20% slope' },
      { label: 'Energy Gain', value: '+25-45% vs fixed tilt' },
      { label: 'Control System', value: 'AI Smart Algorithm' },
    ],
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    ],
    applications: ['Utility-Scale Solar Farms', 'Commercial Solar Plants', 'Agricultural Solar'],
  },
  {
    id: '10',
    slug: 'adjustable-ground-mount',
    name: 'Adjustable Tilt Ground Mount',
    category: 'Ground Mount',
    shortDescription: 'Flexible tilt angle adjustment for optimal energy production.',
    description: 'Our Adjustable Tilt Ground Mount systems allow seasonal angle adjustments to maximize energy capture throughout the year. Options include stepless and preset angle configurations.',
    features: [
      'Stepless or preset angle adjustment',
      'Angle range: 5° to 60°',
      'Single person operation possible',
      'Linear actuator or manual adjustment',
      'Electric or manual drive options',
      '7MW/day adjustment capacity',
    ],
    specifications: [
      { label: 'Adjustment Range', value: '5° - 60°' },
      { label: 'Accuracy', value: '1° (higher for stepless)' },
      { label: 'Daily Capacity', value: 'Up to 7MW/day' },
      { label: 'Personnel', value: '1 person operation' },
      { label: 'Drive', value: 'Electric or Manual' },
    ],
    images: [
      'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    ],
    applications: ['Ground Solar Farms', 'Agricultural Land', 'Large Commercial Projects'],
  },
];

export const categories = [
  { id: 'roof-mount', name: 'Roof Mount', slug: 'roof-mount', icon: 'home' },
  { id: 'ground-mount', name: 'Ground Mount', slug: 'ground-mount', icon: 'mountain' },
  { id: 'carport', name: 'Carport', slug: 'carport', icon: 'car' },
  { id: 'tracking', name: 'Tracking Systems', slug: 'tracking', icon: 'sun' },
  { id: 'components', name: 'Components', slug: 'components', icon: 'settings' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
}
