import Link from 'next/link';
import Image from 'next/image';
import { Product } from './types';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen max-w-6xl mx-auto">
      <div className="px-6 lg:px-8 py-[60px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Smartphones with EMI Plans
          </h1>
          <p className="text-lg text-gray-600">
            Choose your favorite device and pay in easy installments backed by mutual funds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const minPrice = Math.min(...product.variants.map(v => v.price));
            const maxPrice = Math.max(...product.variants.map(v => v.price));
            
            return (
              <Link key={product.id} href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-64 bg-linear-to-br from-gray-50 to-gray-100">
                  <Image
                    src={product.variants[0].imageUrl} alt={product.name} fill
                    className="object-contain p-8 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                
                <div className="flex flex-col justify-between grow p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{minPrice.toLocaleString('en-IN')}
                      </span>
                      {minPrice !== maxPrice && (
                        <span className="text-gray-500">
                          - ₹{maxPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.variants.length} variants available
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}
