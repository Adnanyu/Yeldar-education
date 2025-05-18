// import Link from 'next/link';

// const Header = () => (
//   <header className="bg-[#242D4B] shadow text-whit sticky top-0 border-b-none">
//     <div className="container mx-auto px-4 py-2 flex justify-between items-center h-2/5 md:gap-5 lg:gap-7 md:justify-start">
//       <div className="flex-shrink-0">
//         <a href="/" title="" className="flex">
//             <img className="w-auto h-8 lg:h-25" src="/logo.jpg" alt="" />
//         </a>
//     </div>
//       <nav className="w-full md:block md:w-auto md:ml-10 ">
//         <ul className='mt-4 flex gap-5 flex-row md:mt-0 md:flex-row md:items-center md:space-x-3 lg:space-x-4 md:text-sm md:font-medium'>
//           <Link  className='select-none block py-2 ltr:text-left ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3 ltr:md:px-0 rtl:md:px-0 md:text-nowrap text-base xl:text-lg 2xl:text-xl ' href="/">Home</Link>
//           <Link className='select-none block py-2 ltr:text-left ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3 ltr:md:px-0 rtl:md:px-0 md:text-nowrap text-base xl:text-lg 2xl:text-xl ' href="/universities">Universities</Link>
//           <Link className='select-none block py-2 ltr:text-left ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3 ltr:md:px-0 rtl:md:px-0 md:text-nowrap text-base xl:text-lg 2xl:text-xl ' href="/services">Services</Link>
//           <Link className='select-none block py-2 ltr:text-left ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3 ltr:md:px-0 rtl:md:px-0 md:text-nowrap text-base xl:text-lg 2xl:text-xl ' href="/about">About</Link>
//           <Link className='select-none block py-2 ltr:text-left ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3 ltr:md:px-0 rtl:md:px-0 md:text-nowrap text-base xl:text-lg 2xl:text-xl ' href="/contact">Contact</Link>
//         </ul>
//       </nav>
//     </div>
//   </header>
// );

// export default Header;


'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  // State for toggling the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu on click
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#242D4B] shadow text-white sticky top-0 z-50 border-b-none">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <img className="w-auto h-10 lg:h-25" src="/logo.jpg" alt="Logo" />
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:block md:w-auto md:ml-10">
          <ul className="mt-4 flex gap-5 flex-row md:mt-0 md:flex-row md:items-center md:space-x-3 lg:space-x-4 md:text-sm md:font-medium">
            <Link href="/" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl">Home</Link>
            <Link href="/universities" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl">Universities</Link>
            <Link href="/services" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl">Services</Link>
            <Link href="/about" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl">About</Link>
            <Link href="/contact" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl">Contact</Link>
          </ul>
        </nav>
      </div>

      {/* Mobile menu (hidden on desktop) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full bg-[#242D4B] text-white`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <Link href="/" className="text-base xl:text-lg 2xl:text-xl py-2">Home</Link>
          <Link href="/universities" className="text-base xl:text-lg 2xl:text-xl py-2">Universities</Link>
          <Link href="/services" className="text-base xl:text-lg 2xl:text-xl py-2">Services</Link>
          <Link href="/about" className="text-base xl:text-lg 2xl:text-xl py-2">About</Link>
          <Link href="/contact" className="text-base xl:text-lg 2xl:text-xl py-2">Contact</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;


