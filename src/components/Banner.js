import React from 'react';
import Users from './Users';
import Img from '../assets/img/banner-img.png';

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:text-left lg:pb-0  '>
      <div className='container mx-auto'></div>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <div className='lg:ml-6'>

          <h1 className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'
          data-aos='fade-down' data-aos-delay= '500'> Lets's Explore <br /> Three-Dimensional Visually</h1>


          <p className='font-secondary  mb-12 max-w-[440px] mx-auto lg:mx-0' data-aos='fade-down' data-aos-delay='600'> 
          Lorem ipsum dolor sit amet ijgregkvdgremgd 
          gmklvmxlkvmdsgklm xcjdgndkjcnxkb
          bfbjmklcxvmxklb ckbmdfbkl;mklvdkl
          </p>


          <div className='flex flex-row items-center justify-around space-x-4 mx-w-[320px]
           mx-auto mb-12 lg:flex-row lg:max-w-none lg:justify-start lg:mx-auto lg:space-x-8px' 
           data-aos='fade-down' data-aos-delay='700'>
            {/* button */}

            <button className='btn'>Get it now</button>
            <a className='border-b-2 border-transparent hover:border-white transition ease-out' href='#'>Explore Device</a>
          </div>

          <div>
            <Users />
          </div>
        </div>

        {/* image */}
        <div data-aos='fade-up' data-aos-delay='800'>
          <img src={Img} alt='img' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
