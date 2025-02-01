import React from 'react';

interface InfoSectionProps {
  title: string;
  content: string;
  buttonText: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content, buttonText }) => {
  return (
    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
      <h2 className="text-2xl font-medium text-[#333] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-[#FF4B1F] after:transition-all after:duration-300 group-hover:after:w-32">
        {title}
      </h2>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-[#333] transition-colors">
        {content}
      </p>
      <button className="border-2 border-[#FF4B1F] text-[#FF4B1F] px-6 py-2 text-sm hover:bg-[#FF4B1F] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        {buttonText}
      </button>
    </div>
  );
};

export default InfoSection;