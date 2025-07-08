// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} My Headless Store. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}