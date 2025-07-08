// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Store
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/collections" className="hover:text-gray-300">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            {/* আপনি আরও নেভিগেশন লিঙ্ক যোগ করতে পারেন */}
          </ul>
        </nav>
      </div>
    </header>
  );
}