import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-2xl font-medium text-white mb-4">{title}</h3>
      <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
        {description}
      </p>
      <button className="border-2 border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-[#FF4B1F] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        Find out more
      </button>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Departments & Centres",
      description: "The academic course programs (BTech/MTech/MSc) are the responsibility of individual departments, which will also is guided by a team of experrienced facultys ",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Course-Based Programs",
      description: "College of Engineering and management of Punnapra conducts undergraduate academic program of B. Tech , postgraduate course programs of M. Tech and M.Sc...",
      imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Experienced Faculty",
      description: "College of Engineering and management of Punapra has a wide range of experieenced faculty who ready to help students in any situation",
      imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-[#FF4B1F] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {programs.map((program, index) => (
            <div key={program.title} style={{ animation: `fadeIn 0.5s ease-out ${index * 0.2}s` }}>
              <ProgramCard {...program} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;