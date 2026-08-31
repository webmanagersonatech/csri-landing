import dynamic from 'next/dynamic';
import Banner from './components/Banner/index';
import Aboutcsri from './components/Aboutcsri';
import Aboutus from './components/Aboutus/index';

// Below-the-fold sections: code-split so their JS loads as the user
// scrolls down instead of all at once on first paint.
const CSRIFocusPage = dynamic(() => import('./components/Focus Area/index'));
const Featured = dynamic(() => import('./components/Featured/index'));
const Dedicated = dynamic(() => import('./components/Dedicated/index'));
const Digital = dynamic(() => import('./components/Digital/index'));
const Ourteam = dynamic(() => import('./components/Ourteam/index'));
const FAQ = dynamic(() => import('./components/FAQ/index'));
const Testimonials = dynamic(() => import('./components/Testimonials/index'));
const Joinus = dynamic(() => import('./components/Joinus/index'));

import { FaWhatsapp } from 'react-icons/fa';


export default function Home() {

  return (
    <main>
      <Banner />
      <Aboutcsri/>
      <Aboutus />
      <CSRIFocusPage />
      <Featured />
      <Dedicated />
      <div
        className="relative bg-[url('/images/home/misssion.webp')]
             bg-cover bg-center bg-no-repeat w-full"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content stays above overlay */}
        <div className="relative z-10">
          <Digital />
        </div>
      </div>
      <Ourteam />

      <FAQ />
      <Testimonials />
      <Joinus />
      <a
        href="https://wa.me/919488998348" // Add +91 here
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: "#25D366" }} // WhatsApp green
        className="fixed bottom-5 right-5 z-50 text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:brightness-90 transition-all"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>


    </main>
  )
}
