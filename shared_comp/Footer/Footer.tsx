'use client'
import Image from 'next/image';
import { footer_data } from './Footer-data';
import Link from 'next/link';
import { playstore } from '../../app/(home)/_comp/Download/Download-data';

// const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//         section.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         });
//     }
// };

const Footer = () => {
    return (
        <div className='w-9/12 mb-4 mx-auto text-black'>
            <div className='footer mx-auto justify-around items-center'>
                {/* first section */}
           <div className=' w-3/12  px-4'>
           <Image alt='nirbhabona' src='/image/nirbhabona/nirbhabona.png' height={200} width={200} className='' />
           <p className='text-black font-black footer-icon '>Nirbhabona mobile app <br/> for business solution</p>
          <div className='hamburger-menu text-white' style={{width:'200px'}}>
          {
                        playstore.map((params,idx)=>(
                            <div key={idx} className='bg-black  rounded-lg flex  items-center px-4 py-2'>
                                <Link key={idx} href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' className='flex items-center'>
                               <p className='text-xl'>{params.icon}</p>
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

            {/* second section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                footer_data.map((params,idx)=>(
                    <div key={idx}className=''>
                        <p className='text-black font-bold text-xl '>{params.title}</p>
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

            {/* third section */}
            <div className=' text-white footer-icon  md:hidden  ' style={{width:'200px'}}>
            {
                        playstore.map((params,idx)=>(
                            <div key={idx} className='bg-black  rounded-lg flex  items-center  justify-center'>
                                <Link key={idx} href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' className='flex items-center'>
                               <p className='text-xl'>{params.icon}</p>
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
