// data/products.ts

export interface Product {
  id: string;
  name: string;
  image: string;
  images: string[]; // Multiple images for gallery
  description: string;
  material: string;
  features: string[];
  applications: string[];
  sizes: string[]; // Available sizes
  colors: string[]; // Available colors
  weight?: string; // Optional weight
  thickness?: string; // Optional thickness
  density?: string; // Optional density
  moq?: string; // Minimum Order Quantity
  price?: string; // Optional price range
}

export const products: Product[] = [
  {
    id: 'sp-02',
    name: 'SP-02',
    image: '/images/sp-02.jpeg',
    images: ['/images/sp-02.jpeg'],
    description: 'Premium EVA shoe sole with superior cushioning and shock absorption. Designed for high-performance footwear.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Lightweight construction',
      'Excellent cushioning',
      'Water-resistant',
      'Flexible design',
      'Anti-slip pattern',
      'Durable material'
    ],
    applications: ['Sports shoes', 'Running shoes', 'Training shoes', 'Athletic wear'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Grey', 'Blue'],
    weight: '80-120 grams',
    thickness: '25-35 mm',
    density: '0.15-0.25 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-15',
    name: 'SP-15',
    image: '/images/sp-15.jpeg',
    images: ['/images/sp-15.jpeg'],
    description: 'Comfortable EVA sole designed for everyday casual footwear. Perfect balance of comfort and durability.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Soft cushioning',
      'Lightweight',
      'All-day comfort',
      'Easy to clean',
      'Breathable design',
      'Long-lasting'
    ],
    applications: ['Casual shoes', 'Sandals', 'Slippers', 'Daily wear'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: ['Beige', 'Brown', 'Black', 'Navy'],
    weight: '60-100 grams',
    thickness: '20-30 mm',
    density: '0.12-0.20 g/cm³',
    moq: '1000 pairs'
  },
  {
    id: 'sp-25',
    name: 'SP-25',
    image: '/images/sp-25.jpeg',
    images: ['/images/sp-25.jpeg'],
    description: 'High-performance EVA sole for professional footwear with maximum shock absorption and energy return.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Maximum shock absorption',
      'Energy return technology',
      'Breathable design',
      'Arch support',
      'Lightweight performance',
      'Grip pattern'
    ],
    applications: ['Running shoes', 'Marathon shoes', 'Performance footwear'],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['White', 'Black', 'Red', 'Blue', 'Green'],
    weight: '70-110 grams',
    thickness: '28-38 mm',
    density: '0.18-0.28 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-45',
    name: 'SP-45',
    image: '/images/sp-45.jpeg',
    images: ['/images/sp-45.jpeg'],
    description: 'Rugged EVA sole designed for outdoor and trail footwear with enhanced grip and durability.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Deep tread pattern',
      'Weather-resistant',
      'Enhanced durability',
      'Superior grip',
      'Shock absorption',
      'Mud-release design'
    ],
    applications: ['Hiking shoes', 'Trail running', 'Outdoor footwear', 'Adventure shoes'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Olive', 'Grey'],
    weight: '90-130 grams',
    thickness: '30-40 mm',
    density: '0.20-0.30 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-52',
    name: 'SP-52',
    image: '/images/sp-52.jpeg',
    images: ['/images/sp-52.jpeg'],
    description: 'Lightweight and comfortable EVA sole specially designed for premium footwear.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Extra soft cushioning',
      'Lightweight design',
      'Non-toxic materials',
      'Flexible construction',
      'Easy to clean',
      'Versatile application'
    ],
    applications: ['Casual shoes', 'Fashion footwear', 'Daily wear', 'Comfort shoes'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: ['Pink', 'Blue', 'Red', 'Yellow', 'Green', 'Purple'],
    weight: '40-70 grams',
    thickness: '15-25 mm',
    density: '0.10-0.18 g/cm³',
    moq: '1000 pairs'
  },
  {
    id: 'sp-6-10',
    name: 'SP-6-10',
    image: '/images/sp-6-10.jpeg',
    images: ['/images/sp-6-10.jpeg'],
    description: 'Comfortable EVA sole perfect for slippers and sandals with excellent cushioning.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Soft and comfortable',
      'Water-resistant',
      'Anti-slip surface',
      'Easy maintenance',
      'Lightweight',
      'Quick-dry'
    ],
    applications: ['Slippers', 'Flip-flops', 'Bathroom slippers', 'Indoor footwear'],
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Blue', 'Grey', 'Green', 'Red'],
    weight: '50-80 grams',
    thickness: '18-28 mm',
    density: '0.12-0.22 g/cm³',
    moq: '2000 pairs'
  },
  {
    id: 'sp-101',
    name: 'SP-101',
    image: '/images/sp-101.jpeg',
    images: ['/images/sp-101.jpeg'],
    description: 'Sleek EVA sole designed for formal and semi-formal footwear with professional appearance.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Slim profile',
      'Professional look',
      'Comfortable padding',
      'Noise-free walking',
      'Durable construction',
      'Polished finish'
    ],
    applications: ['Formal shoes', 'Office shoes', 'Dress shoes', 'Semi-formal footwear'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Tan'],
    weight: '70-100 grams',
    thickness: '15-25 mm',
    density: '0.15-0.25 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-103',
    name: 'SP-103',
    image: '/images/sp-103.jpeg',
    images: ['/images/sp-103.jpeg'],
    description: 'Elegant EVA sole designed for versatile footwear with comfortable support.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Heel cushioning',
      'Arch support',
      'Stylish design',
      'Comfortable fit',
      'Lightweight',
      'Fashion-forward'
    ],
    applications: ['Fashion footwear', 'Casual shoes', 'Daily wear', 'Comfort shoes'],
    sizes: ['5', '6', '7', '8', '9', '10'],
    colors: ['Beige', 'Black', 'White', 'Pink', 'Red'],
    weight: '60-90 grams',
    thickness: '20-35 mm',
    density: '0.14-0.24 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-105',
    name: 'SP-105',
    image: '/images/sp-105.jpeg',
    images: ['/images/sp-105.jpeg'],
    description: 'Premium EVA sole with advanced cushioning technology for superior comfort.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Advanced cushioning',
      'Shock absorption',
      'Lightweight design',
      'Flexible construction',
      'Anti-slip grip',
      'Durable material'
    ],
    applications: ['Sports shoes', 'Athletic wear', 'Training shoes', 'Performance footwear'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Blue', 'Red'],
    weight: '75-115 grams',
    thickness: '22-32 mm',
    density: '0.16-0.26 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-106',
    name: 'SP-106',
    image: '/images/sp-106.jpeg',
    images: ['/images/sp-106.jpeg'],
    description: 'Versatile EVA sole suitable for various footwear applications with excellent durability.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Multi-purpose design',
      'Long-lasting durability',
      'Comfortable cushioning',
      'Easy maintenance',
      'Water-resistant',
      'Flexible construction'
    ],
    applications: ['Casual shoes', 'Sports shoes', 'Daily wear', 'General footwear'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: ['Black', 'White', 'Grey', 'Navy'],
    weight: '65-105 grams',
    thickness: '20-30 mm',
    density: '0.13-0.23 g/cm³',
    moq: '1000 pairs'
  },
  {
    id: 'sp-107',
    name: 'SP-107',
    image: '/images/sp-107.jpeg',
    images: ['/images/sp-107.jpeg'],
    description: 'High-quality EVA sole with enhanced grip pattern for superior traction.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Enhanced grip pattern',
      'Superior traction',
      'Shock absorption',
      'Lightweight',
      'Weather-resistant',
      'Durable construction'
    ],
    applications: ['Outdoor shoes', 'Sports shoes', 'Hiking footwear', 'Athletic wear'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Grey', 'Green'],
    weight: '85-125 grams',
    thickness: '26-36 mm',
    density: '0.17-0.27 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-108',
    name: 'SP-108',
    image: '/images/sp-108.jpeg',
    images: ['/images/sp-108.jpeg'],
    description: 'Modern EVA sole design combining style and comfort for contemporary footwear.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Contemporary design',
      'Comfortable fit',
      'Stylish appearance',
      'Lightweight construction',
      'Flexible material',
      'Easy to clean'
    ],
    applications: ['Fashion footwear', 'Casual shoes', 'Street wear', 'Urban footwear'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: ['White', 'Black', 'Beige', 'Pink'],
    weight: '55-95 grams',
    thickness: '18-28 mm',
    density: '0.12-0.22 g/cm³',
    moq: '1000 pairs'
  },
  {
    id: 'sp-109',
    name: 'SP-109',
    image: '/images/sp-109.jpeg',
    images: ['/images/sp-109.jpeg'],
    description: 'Professional-grade EVA sole with optimal balance of comfort and performance.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Professional grade',
      'Optimal balance',
      'Performance-oriented',
      'Comfortable padding',
      'Durable design',
      'Anti-fatigue technology'
    ],
    applications: ['Work shoes', 'Professional footwear', 'All-day wear', 'Comfort shoes'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown', 'Grey'],
    weight: '70-110 grams',
    thickness: '22-32 mm',
    density: '0.15-0.25 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-110',
    name: 'SP-110',
    image: '/images/sp-110.jpeg',
    images: ['/images/sp-110.jpeg'],
    description: 'Innovative EVA sole featuring advanced design for maximum comfort and support.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Innovative design',
      'Maximum comfort',
      'Advanced support',
      'Lightweight construction',
      'Breathable material',
      'Long-lasting durability'
    ],
    applications: ['Premium footwear', 'Sports shoes', 'Casual shoes', 'Athletic wear'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Blue', 'Grey'],
    weight: '80-120 grams',
    thickness: '24-34 mm',
    density: '0.16-0.26 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sp-112',
    name: 'SP-112',
    image: '/images/sp-112.jpeg',
    images: ['/images/sp-112.jpeg'],
    description: 'Premium quality EVA sole with superior craftsmanship for high-end footwear.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Premium quality',
      'Superior craftsmanship',
      'Excellent cushioning',
      'Refined design',
      'Comfortable fit',
      'High-end finish'
    ],
    applications: ['Premium footwear', 'Luxury shoes', 'Fashion footwear', 'Designer shoes'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: ['Black', 'White', 'Tan', 'Beige'],
    weight: '60-100 grams',
    thickness: '20-30 mm',
    density: '0.14-0.24 g/cm³',
    moq: '500 pairs'
  },
  {
    id: 'sld-1',
    name: 'SLD-1',
    image: '/images/sld-1.jpeg',
    images: ['/images/sld-1.jpeg'],
    description: 'Specialized EVA sole designed for slipper and sandal applications with comfort focus.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Slipper-optimized',
      'Ultra-soft cushioning',
      'Water-resistant',
      'Quick-dry material',
      'Anti-slip surface',
      'Easy maintenance'
    ],
    applications: ['Slippers', 'Sandals', 'Flip-flops', 'Indoor footwear'],
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Blue', 'Red', 'Green', 'Grey'],
    weight: '45-75 grams',
    thickness: '16-26 mm',
    density: '0.11-0.21 g/cm³',
    moq: '2000 pairs'
  },
  {
    id: 'sld-2',
    name: 'SLD-2',
    image: '/images/sld-2.jpeg',
    images: ['/images/sld-2.jpeg'],
    description: 'Comfortable EVA slipper sole with enhanced durability for everyday use.',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: [
      'Enhanced durability',
      'Comfortable cushioning',
      'Lightweight design',
      'Water-resistant',
      'Anti-slip grip',
      'Easy to clean'
    ],
    applications: ['Slippers', 'Casual footwear', 'Indoor shoes', 'Beach wear'],
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Blue', 'Grey', 'Brown'],
    weight: '50-80 grams',
    thickness: '18-28 mm',
    density: '0.12-0.22 g/cm³',
    moq: '2000 pairs'
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Helper function for search
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.material.toLowerCase().includes(lowerQuery)
  );
}
