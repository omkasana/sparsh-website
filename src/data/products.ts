// data/products.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  material: string;
  features: string[];
  applications: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'EVA Soles',
    slug: 'eva-soles',
    description: 'Lightweight and cushioned EVA soles perfect for sports and casual footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    productCount: 25,
  },
  {
    id: '2',
    name: 'PU Soles',
    slug: 'pu-soles',
    description: 'Durable and flexible polyurethane soles for formal and casual shoes',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    productCount: 18,
  },
  {
    id: '3',
    name: 'TPR Soles',
    slug: 'tpr-soles',
    description: 'Cost-effective thermoplastic rubber soles with excellent grip',
    image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80',
    productCount: 20,
  },
  {
    id: '4',
    name: 'Rubber Soles',
    slug: 'rubber-soles',
    description: 'Heavy-duty rubber soles for industrial and outdoor footwear',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80',
    productCount: 15,
  },
];

export const products: Product[] = [
  // EVA Soles
  {
    id: 'eva-1',
    name: 'SP 81 EVA Sports Sole',
    category: 'eva-soles',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    description: 'Premium EVA sports shoe sole with superior cushioning and shock absorption',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: ['Lightweight construction', 'Excellent cushioning', 'Water-resistant', 'Flexible design'],
    applications: ['Sports shoes', 'Running shoes', 'Casual footwear', 'Athletic wear'],
  },
  {
    id: 'eva-2',
    name: 'EVA Casual Sole',
    category: 'eva-soles',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    description: 'Comfortable EVA sole designed for everyday casual footwear',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: ['Soft cushioning', 'Lightweight', 'Durable', 'Easy to clean'],
    applications: ['Casual shoes', 'Sandals', 'Slippers', 'Indoor footwear'],
  },
  {
    id: 'eva-3',
    name: 'EVA Running Sole',
    category: 'eva-soles',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    description: 'High-performance EVA sole for running and athletic shoes',
    material: 'EVA (Ethylene-Vinyl Acetate)',
    features: ['Maximum shock absorption', 'Energy return', 'Breathable design', 'Arch support'],
    applications: ['Running shoes', 'Training shoes', 'Performance footwear'],
  },

  // PU Soles
  {
    id: 'pu-1',
    name: 'PU Formal Sole',
    category: 'pu-soles',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80',
    description: 'Elegant polyurethane sole for formal and dress shoes',
    material: 'PU (Polyurethane)',
    features: ['Sleek finish', 'Long-lasting', 'Comfortable', 'Professional look'],
    applications: ['Formal shoes', 'Dress shoes', 'Office footwear', 'Business wear'],
  },
  {
    id: 'pu-2',
    name: 'PU Comfort Sole',
    category: 'pu-soles',
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80',
    description: 'All-day comfort PU sole for daily wear',
    material: 'PU (Polyurethane)',
    features: ['Superior comfort', 'Shock absorption', 'Flexible', 'Wear-resistant'],
    applications: ['Daily shoes', 'Casual footwear', 'Walking shoes'],
  },

  // TPR Soles
  {
    id: 'tpr-1',
    name: 'TPR Grip Sole',
    category: 'tpr-soles',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    description: 'High-grip TPR sole for enhanced traction',
    material: 'TPR (Thermoplastic Rubber)',
    features: ['Excellent grip', 'Slip-resistant', 'Durable', 'Cost-effective'],
    applications: ['Work shoes', 'Safety footwear', 'All-weather shoes'],
  },
  {
    id: 'tpr-2',
    name: 'TPR Casual Sole',
    category: 'tpr-soles',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
    description: 'Versatile TPR sole for everyday casual footwear',
    material: 'TPR (Thermoplastic Rubber)',
    features: ['Flexible', 'Comfortable', 'Affordable', 'Easy maintenance'],
    applications: ['Casual shoes', 'Sandals', 'Everyday wear'],
  },

  // Rubber Soles
  {
    id: 'rubber-1',
    name: 'Industrial Rubber Sole',
    category: 'rubber-soles',
    image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&q=80',
    description: 'Heavy-duty rubber sole for industrial and work boots',
    material: 'Natural & Synthetic Rubber',
    features: ['Maximum durability', 'Oil-resistant', 'Heat-resistant', 'Heavy-duty construction'],
    applications: ['Work boots', 'Safety shoes', 'Industrial footwear'],
  },
  {
    id: 'rubber-2',
    name: 'Outdoor Rubber Sole',
    category: 'rubber-soles',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80',
    description: 'Weather-resistant rubber sole for outdoor activities',
    material: 'Natural & Synthetic Rubber',
    features: ['All-weather grip', 'Waterproof', 'Durable', 'Tread design'],
    applications: ['Hiking boots', 'Outdoor shoes', 'Adventure footwear'],
  },
];

// Helper function to get products by category
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.category === categorySlug);
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}
