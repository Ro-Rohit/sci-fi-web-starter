import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header'
import NavMobile from './components/NavMobile';
import Experience from './components/Experience';
import Video from './components/Video';
import Headsets from './components/Headsets';
import Testimonial from './components/Testimonial'
import Explore from './components/Explore';

import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  const [navMobile, setnavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (

    <div className=' p-[2%] relative overflow-hidden before:w-[600px] before:h-[200px] 
    before:bg-circle before:bg-no-repeat before:absolute before:top-0 before:left-[250px] before:hidden before:lg:flex'>
      <Header setnavMobile={setnavMobile}/>
      <Banner />
      {/* mobile nav  */}
      <div className={`${navMobile ? 'right-0': 'right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
        <NavMobile  setnavMobile={setnavMobile} />
      </div>
      <div>
        <Experience />
        <Video />
        <Headsets />
        <Testimonial />
        <Explore />
      </div>
    </div>
  )
};

export default App;
