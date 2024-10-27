
import Footer from '@/shared_comp/Footer/Footer';
import Navbar from '@/shared_comp/Navbar/Navbar';
// import Navbar from '@/shared_comp/Navbar/Navbar';
import React from 'react';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
          <div className='fixed z-30 w-full bg-white '>
          {/* <Navbar></Navbar> */}
          <Navbar></Navbar>
          </div>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;


