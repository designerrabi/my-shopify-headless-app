// app/page.tsx
import { getAllProducts } from '../lib/shopify';
import Image from 'next/image';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Shopify Headless Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
            {product.featuredImage && (
              <Image
                src={product.featuredImage.url}
                alt={product.featuredImage.altText || product.title}
                width={300} // আপনার প্রয়োজন অনুযায়ী প্রস্থ সেট করুন
                height={300} // আপনার প্রয়োজন অনুযায়ী উচ্চতা সেট করুন
                className="rounded-md object-cover mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-center mb-2">{product.title}</h2>
            <p className="text-gray-700">
              {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}{' '}
              {product.priceRange.minVariantPrice.currencyCode}
            </p>
            {/* আরও ডিটেইলস যোগ করতে পারেন, যেমন: <Link href={`/products/${product.handle}`}>View Product</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}