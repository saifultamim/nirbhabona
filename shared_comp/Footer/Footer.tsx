'use client'
import Image from 'next/image';
import { footer_data } from './Footer-data';
import Link from 'next/link';
import { playstore } from '../../app/(home)/_comp/Download/Download-data';
const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',  
      });
    }
  };
const Footer = () => {
    return (
        <div className='w-9/12 mb-4 mx-auto '>
            <div className='grid grid-cols-1 md:[2fr,5fr,1fr] lg:grid-cols-[2fr,4fr,1fr] items-center justify-between'>
           
            
          <button className='w-52 grid justify-center lg:mx-0 lg:mb-0 mb-3 ' onClick={() => scrollToSection('home')}>
          <Image alt='nirbhabona' src='/image/nirbhabona/nirbhabona.png' height={200} width={200} className='' />
          <p className='text-black font-black hidden lg:block'>Nirbhabona mobile app <br/> for business solution</p>
          <div className='block lg:hidden'>
        {
                        playstore.map((params,idx)=>(
                            <div key={idx} className='bg-black  rounded-lg flex  items-center m-1 p-1'>
                                <Link key={idx} href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' className='flex items-center gap-6  px-4 py-2 animate-scale hover:scale-110 transition-transform duration-300'>
                               <p className='text-4xl'>{params.icon}</p>
                                <div>
                                    <p>{params.title}</p>
                                    <p>{params.name}</p>
                                </div>
                               </Link>
                            </div>
                        ))
                    }
        </div>
          </button>
  

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-around'>
            {
                footer_data.map((params,idx)=>(
                    <div key={idx}>
                        <p className='text-black font-bold text-xl mt-2 md:mt-0 lg:mt-0'>{params.title}</p>
                        {
                            params.data.map((param,idx)=>(
                                <div key={idx} className=''>
                                    <Link href='#' className='text-black custom-underline'>{param}</Link>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>

        <div className='hidden lg:block'>
        {
                       playstore.map((params,idx)=>(
                        <div key={idx} className='bg-black  rounded-lg flex  items-center m-1 p-1'>
                            <Link key={idx} href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' className='flex items-center gap-6  px-4 py-2 animate-scale hover:scale-110 transition-transform duration-300'>
                           <p className='text-4xl'>{params.icon}</p>
                            <div>
                                <p>{params.title}</p>
                                <p>{params.name}</p>
                            </div>
                           </Link>
                        </div>
                    ))
                    }
        </div>

            </div>
        </div>
    );
};

export default Footer;