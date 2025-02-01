import React from 'react';
import { Calendar } from 'lucide-react';

interface Event {
  date: {
    month: string;
    day: string;
  };
  title: string;
  time: string;
}

const events: Event[] = [
  {
    date: { month: 'FEB', day: '14' },
    title: 'VALENTINES DAY CELEBRATION',
    time: '9:00 am'
  },
  {
    date: { month: 'FEB', day: '21' },
    title: 'ARTS DAY',
    time: '10:00 am'
  },
  {
    date: { month: 'MAR', day: '12' },
    title: 'SPORTS DAY',
    time: '7:00 am'
  },
  {
    date: { month: 'MAR', day: '31' },
    title: 'Unnat Bharat Abhiyan RCI-IITPKD & IMA Palakkad Workshop',
    time: '9:00 am'
  }
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
    <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg min-w-[80px] group-hover:bg-[#FF4B1F] group-hover:text-white transition-colors duration-300">
      <span className="text-sm font-medium">{event.date.month}</span>
      <span className="text-2xl font-bold">{event.date.day}</span>
    </div>
    <div>
      <h4 className="font-medium text-gray-900 group-hover:text-[#FF4B1F] transition-colors duration-300">
        {event.title}
      </h4>
      <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
        <Calendar size={14} />
        <span>{event.time}</span>
      </div>
    </div>
  </div>
);

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-[#FF4B1F]">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} style={{ animation: `fadeIn 0.8s ease-out ${index * 0.3}s` }}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-[#FF4B1F]">
            Notifications
          </h2>
          <div className="space-y-4">
            {[
              'Staff Recruitment | Updates | Results',
              'Faculty Recruitment 2025',
              'Research Admissions - January 2025',
              'Call for Applications - 5G and 6G Hackathon',
              'National Fellowship and Scholarship for Higher Education of ST Students',
              'Staff Recruitment | Shortlist'
            ].map((notification, index) => (
              <div 
                key={index}
                style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s` }}
                className="p-4 border-l-4 border-[#FF4B1F] bg-white shadow-sm hover:shadow-md transition-shadow duration-300 hover:translate-x-2 cursor-pointer"
              >
                <p className="text-gray-800 hover:text-[#FF4B1F] transition-colors duration-300">
                  {notification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;