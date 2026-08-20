import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Collection", href: "/collection" },
    // { name: "Shop Products", href: "/shop" },
    { name: "Our History", href: "/history" },
    { name: "Our Craft", href: "/craft" },
    { name: "Responsibilities", href: "/responsibilities" },
    { name: "Compliance", href: "/compliance" },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="w-full h-[82px] flex items-start">

        {/* ================= LEFT HEADER ================= */}
        <div className="w-[63%] h-full flex items-center pl-[55px] pr-[25px]">

          {/* Logo */}
          <Link
            href="/"
            className="relative self-start flex-shrink-0 z-10"
          >
            <Image
              src="/images/logo/Centurylogo.svg"
              alt="Century Overseas"
              width={105}
              height={125}
              className="w-[105px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-[22px] ml-[35px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-[13px]
                  font-medium
                  text-[#202020]
                  uppercase
                  whitespace-nowrap
                  tracking-[0.01em]
                  hover:text-[#017574]
                  transition-colors
                  duration-200
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* ================= RIGHT HEADER ================= */}
        <div
          className="
            w-[37%]
            h-full
            flex
            items-center
            justify-center
            gap-[14px]
            px-[18px]
          "
        >
          {/* Search */}
          <div
            className="
              hidden md:flex
              items-center
              bg-white
              rounded-full
              h-[38px]
              flex-1
              max-w-[220px]
              px-[14px]
              shadow-[0_1px_4px_rgba(0,0,0,0.08)]
            "
          >
            <Search
              size={15}
              strokeWidth={1.5}
              className="text-[#7b8b8b] flex-shrink-0"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
                w-full
                ml-[9px]
                bg-transparent
                border-none
                outline-none
                text-[10px]
                text-[#333]
                placeholder:text-[#9a9a9a]
              "
            />
          </div>

          {/* Quote Button */}
         <Link
  href="/request"
  className="
    h-[38px]
    bg-[#017574]
    hover:bg-[#005f5e]
    text-white
    rounded-full
    px-[21px]
    text-[9px]
    font-semibold
    whitespace-nowrap
    transition-colors
    duration-200
    inline-flex
    items-center
    justify-center
  "
>
  REQUEST QUOTE
</Link>
          
        </div>
        

      </div>
    </header>
  );
}
