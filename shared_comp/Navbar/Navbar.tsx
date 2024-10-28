'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',  
      });
    }
  };

  return (
    <nav className=" w-11/12 mx-auto  text-black   shadow-lg shadow-gray-500">
      <div className="container mx-auto flex justify-between items-center p-8 ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <button onClick={() => scrollToSection('home')}>
            <Image alt='nirbhabona' src='/image/nirbhabona/nirbhabona.png' height={200} width={200} className='bg-white rounded-lg' />
          </button>
        </div>

      
         



  {/* Hamburger Menu for Mobile */}
 <div className='hamburger-menu'>
        <button onClick={toggleMenu} className="focus:outline-none">
            <TiThMenu className="text-2xl" />
          </button>
        </div> 
     {/* ================================= */}
  {/* <div>
  <div className="block lg:hidden">
  <button onClick={toggleMenu} className="focus:outline-none">
    1
  </button>
  <button onClick={toggleMenu} className="focus:outline-none">
    2
  </button>
</div>

      
       
        
  </div> */}
     {/* ================================== */}
            
        {/* Full Menu for Larger Screens */}
       <div className={`hidden lg:block space-x-8  w-1/2 font-bold `}>
       <div className={`flex justify-end`}>
          <button onClick={() => scrollToSection('home')} className="hover:text-gray-500   px-4">
            Home
          </button>
          <button onClick={() => scrollToSection('achievement')} className="hover:text-gray-500 px-4">
            Achievement
          </button>
          <button onClick={() => scrollToSection('customer')} className="hover:text-gray-500 px-4">
           Customer
          </button>
          <button onClick={() => scrollToSection('seller')} className="hover:text-gray-500 px-4">
            Merchant
          </button>
        
          <button onClick={() => scrollToSection('features')} className="hover:text-gray-500 px-4">
            Features
          </button>
          <button onClick={() => scrollToSection('pricingPlan')} className="hover:text-gray-500 px-4">
           Pricing Plan
          </button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-gray-500 px-4">
          FAQ
          </button>
          <Link href='/contact' className="hover:text-gray-500 px-4">
           Contact
          </Link>
        </div>
      </div>
       </div>
    
      {/* Mobile Menu */}
      {isOpen && (
        <div className="block lg:hidden font-bold">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <button onClick={() => { scrollToSection('home'); toggleMenu(); }} className="hover:text-gray-500">
              Home
            </button>
            <button onClick={() => { scrollToSection('achievement'); toggleMenu(); }} className="hover:text-gray-500">
            Achievement
            </button>
            <button onClick={() => { scrollToSection('customer'); toggleMenu(); }} className="hover:text-gray-500">
            Customer
            </button>
            <button onClick={() => { scrollToSection('seller'); toggleMenu(); }} className="hover:text-gray-500">
            Merchant
            </button>
            <button onClick={() => { scrollToSection('features'); toggleMenu(); }} className="hover:text-gray-500">
              Features
            </button>
            <button onClick={() => { scrollToSection('pricingPlan'); toggleMenu(); }} className="hover:text-gray-500">
            Pricing Plan
            </button>
            <button onClick={() => { scrollToSection('faq'); toggleMenu(); }} className="hover:text-gray-500 ">
            FAQ
            </button>
            <Link href='/contact' className="hover:text-gray-500 px-4 mb-4">
           Contact
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

