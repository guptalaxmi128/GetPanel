import React from 'react';
import Home1 from './home1/Home1';
import Home2 from './home2/Home2';
import Home3 from './home3/Home3';
import Home4 from './home4/Home4';
import Footer from './footer/Footer';

function Home() {
  return (
    <div>
      <Home1 />
      <Home2 />
      <Home3 />
      {/* <Home4 /> */}
      <Footer />
    </div>
  );
}

export default Home;
