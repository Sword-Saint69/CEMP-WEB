import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import InfoSection from './components/InfoSection';
import Programs from './components/Programs';
import Events from './components/Events';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-white py-1 px-4 flex justify-end items-center text-xs text-gray-600">
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <MapPin size={14} className="text-red-600 hover:scale-110 transition-transform" />
          <span className="hover:text-[#FF4B1F] transition-colors">Punnapra | Alapuzha | Kerala - xxxxxx</span>
          <span className="mx-2">|</span>
          <Phone size={14} className="text-red-600 hover:scale-110 transition-transform" />
          <span className="hover:text-[#FF4B1F] transition-colors">9074409995 (Developer)</span>
          <span className="mx-2">|</span>
          <Mail size={14} className="text-red-600 hover:scale-110 transition-transform" />
          <span className="hover:text-[#FF4B1F] transition-colors">gouthamsankar@aol.com</span>
        </div>
      </div>

      {/* Logo and Header */}
      <header className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-6 flex-col md:flex-row">
          <img 
            src="/iit-palakkad-logo.png" 
            alt="CEMP LOGO" 
            className="h-24 hover:scale-105 transition-transform duration-300" 
          />
          <div className="flex flex-col gap-0.5 text-center md:text-left" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <h1 className="text-xl md:text-2xl font-medium text-[#FF4B1F] hover:text-[#ff3b06] transition-colors">
            കോളേജ് ഓഫ് എഞ്ചിനീയറിംഗ് പുന്നപ്ര
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-[#333] hover:text-[#FF4B1F] transition-colors">
            APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
            </h2>
            <h3 className="text-lg md:text-xl font-medium text-[#FF4B1F] hover:text-[#ff3b06] transition-colors">
              College of Engineering and Management Punnapra
            </h3>
            <p className="text-sm text-gray-600 mt-1 hover:text-[#FF4B1F] transition-colors">
              Nurturing Minds with experienced faculty
            </p>
          </div>
        </div>
      </header>

      <Navbar />
      <ImageSlider />

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {['About CEMP', 'Vision of CEMP', "Director's Desk"].map((title, index) => (
          <div key={title} style={{ animation: `fadeIn 0.5s ease-out ${index * 0.2}s` }}>
            <InfoSection
              title={title}
              content={
                title === 'About CEMP'
                  ? 'The College of Engineering & Management Punnapra, Alappuzha started during the year 2008-2009 under the Co-operative Academy of Professional Education (Kerala) Society,'
                  : title === 'Vision OF CEMP '
                  ? 'To create knowledge; to communicate knowledge; and to apply knowledge for the benefit of society.'
                  : 'A very warm welcome to College of Engineering and Management Punnapra. It is my pleasure to introduce you to this institute which has grown tremendously since its inception in 2008...'
              }
              buttonText="Find out more"
            />
          </div>
        ))}
      </div>

      <Programs />
      <Events />
    </div>
  );
}

export default App;