import Image from 'next/image';
import React from 'react';
import { home_data } from './Home-data';
import { playstore } from '../Download/Download-data';
import Link from 'next/link';


const Home = () => {
    return (
        <div className='transparent-bg-home p-10 '>
        <div className=' grid md:grid-cols-1 lg:grid-cols-2 items-center mx-auto gap-16'>
       
            <div className=' '>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold md:font-extrabold lg:font-extrabold text-black '>
                    {home_data.title}
                </h2>
                <p className='font-semibold mt-4 text-black '>
                    {home_data.description}
                </p>
                <div className='flex gap-4 mt-6'>
                    {
                        playstore.map((params, idx) => (
                            <div key={idx} className='bg-black rounded-lg'>
                               <Link href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' 
                               target='_blank'
                               className='flex items-center gap-6  px-4 py-2 animate-scale hover:scale-110 transition-transform duration-300'>
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

          
            <div className=''>
                <Image
                    alt='home'
                    src={home_data.img}
                    width={400}
                    height={100}
                    className=''
                />
            </div>
        </div>
    </div>
    );
};

export default Home;