import React from 'react';

import Headset1 from '../assets/img/headset-1.png'
import Headset2 from '../assets/img/headset-2.png'
import Headset3 from '../assets/img/headset-3.png'
import Headset4 from '../assets/img/headset-4.png'

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/* title */}
        <h2 data-aos='fade-down' data-aos-offset='300' 
        className='text-3xl font-bold mb-6'>Mixed Reality Headsets</h2>
        {/* grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-y-9'>
          {/* items */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1000'>
            <img src={Headset1} alt="img"></img>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md lg:w-[96%] min-w-[350px] w-[570px]'>
              <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
              <p>Lorem ipsum dolor acet gdfgkvdvdk
              fdmdfkldmcklvcmbfdbdb,
              dfbdfmbdf,b,b,v, fb.,,,,v,, ḍb,ḍ c,dfl;,vlv
              </p>
            </div>
          </div>
          {/* items */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1300'>
            <img src={Headset2} alt="img"></img>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md lg:w-[96%] min-w-[350px] w-[79%]'>
              <h4 className='font-semibold text-xl mb-2'>AIot</h4>
              <p>Lorem ipsum dolor acet gdfgkvdvdk
              fdmdfkldmcklvcmbfdbdb,
              dfbdfmbdf,b,b,v, fb.,,,,v,, ḍb,ḍ c,dfl;,vlv
              </p>
            </div>
          </div>
          {/* items */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1600'>
            <img src={Headset3} alt="img"></img>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md lg:w-[96%] min-w-[350px] w-[79%]'>
              <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
              <p>Lorem ipsum dolor acet gdfgkvdvdk
              fdmdfkldmcklvcmbfdbdb,
              dfbdfmbdf,b,b,v, fb.,,,,v,, ḍb,ḍ c,dfl;,vlv
              </p>
            </div>
          </div>
          {/* items */}
          <div className='relative'  data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1900'>
            <img src={Headset4} alt="img"></img>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md lg:w-[96%] min-w-[350px] w-[79%]'>
              <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
              <p>Lorem ipsum dolor acet gdfgkvdvdk
              fdmdfkldmcklvcmbfdbdb,
              dfbdfmbdf,b,b,v, fb.,,,,v,, ḍb,ḍ c,dfl;,vlv
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Headsets;
