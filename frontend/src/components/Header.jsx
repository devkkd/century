import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react'; 

export default function Header() {
  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Collection', href: '/collection' },
    { name: 'Shop Products', href: '/shop' },
    { name: 'Our History', href: '/history' },
    { name: 'Our Craft', href: '/craft' },
    { name: 'Responsibilities', href: '/responsibilities' },
    { name: 'Compliance', href: '/compliance' },
  ];

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 h-24">
        
        {/* Logo Section - self-start pins the straight edge of your SVG to the top */}
        <div className="relative self-start">
          <Link href="/">
            <Image 
              src="/images/logo/Centurylogo.svg" 
              alt="Century Overseas" 
              /* Adjust width/height depending on the exact dimensions of your SVG */
              width={110} 
              height={140} 
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links - Text made smaller (text-[11px]) */}
        <nav className="hidden xl:flex items-center gap-6 text-[11px] font-medium text-gray-700 uppercase tracking-widest ml-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-[#017574] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Search & Button */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search Bar - Scaled down slightly to match smaller text */}
          <div className="hidden md:flex items-center bg-transparent border border-gray-300 rounded-full px-4 py-2 w-56 focus-within:border-[#017574] transition-colors">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none ml-2 w-full text-[11px] text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Request Quote Button */}
          <button className="bg-[#017574] hover:bg-[#015a59] text-white px-6 py-2 rounded-full text-[11px] font-semibold transition-colors shadow-sm whitespace-nowrap tracking-wide">
            REQUEST QUOTE
          </button>
        </div>

      </div>
    </header>
  );
}