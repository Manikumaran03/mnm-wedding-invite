import { Clock, MapPin, Users, Music, Utensils, Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Wedding',
      date: 'Sep 04, 2025',
      time: '9:00 AM',
      duration: '1.5 hours',
      location: 'Vadapalai Murugan Temple',
      address: '',
      mapUrl: 'https://g.co/kgs/y8gw4oH',
      description: 'As we tie the sacred knot, your love and blessings mean a lot! 💍🙏❤️',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Morning Tiffin',
      date: 'Sep 04, 2025',
      time: '9:30 AM',
      duration: '1 hour',
      location: 'TBA',
      address: '',
      mapUrl: '',
      description: 'We want your heartfelt blessings… and empty plates at the end! ❤️🍴',
      icon: Utensils,
      color: 'from-purple-600 to-purple-700',
    },
    {
      title: 'Reception',
      date: 'Sep 07, 2025',
      time: '7:00 PM',
      duration: '3 hours',
      location: 'A.K.R. Mahal',
      address: '',
      mapUrl: 'https://g.co/kgs/S4dmnXt',
      description:
        'Marriage complete, but hold that thought — Reception’s here, with memories to be caught! 📸💖',
      icon: Music,
      color: 'from-purple-700 to-purple-800',
    },
    {
      title: 'Dinner',
      date: 'Sep 07, 2025',
      time: '10:00 PM',
      duration: '2.5 hours',
      address: '',
      mapUrl: '',
      location: 'A.K.R. Mahal',
      description:
        'Your presence warms our hearts… but a full plate warms them even more. Let’s celebrate together — one bite at a time! 🍽️❤️😄',
      icon: Utensils,
      color: 'from-purple-800 to-purple-900',
    },
  ];

  return (
    <section
      id="events"
      className="relative min-h-screen items-center justify-center bg-[url('/events_bg.png')] bg-cover bg-center bg-no-repeat px-4 py-20 md:bg-cover"
    >
      {/* Glassmorphism overlay */}
      {/* <div className="Z-0 absolute inset-0 border border-white/20 bg-white/10 shadow-inner backdrop-blur-md"></div> */}

      <div className="container relative z-10 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Wedding Timeline
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-800 to-purple-600"></div>
          <p className="mx-auto max-w-2xl text-xl text-white">
            A perfect day planned with love and attention to every detail
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-px transform bg-gradient-to-b from-purple-300 to-purple-600 md:block"></div>

            {events.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative mb-12 flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Desktop Layout */}
                  <div
                    className={`hidden w-1/2 md:block ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <div className="transform rounded-2xl bg-white/80 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${event.color} mb-4 text-white ${
                          isEven ? 'ml-auto' : 'mr-auto'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mb-2 font-serif text-2xl font-bold text-gray-800">
                        {event.title}
                      </h3>

                      <div className="mb-3 flex items-center space-x-4 text-purple-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm">{event.duration}</span>
                      </div>

                      <div className="mb-3 flex items-center space-x-2 text-purple-600">
                        <MapPin className="h-4 w-4" />
                        {event.mapUrl ? (
                          <a
                            href={event.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium underline transition hover:text-purple-800"
                          >
                            {event.location}
                          </a>
                        ) : (
                          <span className="font-medium">{event.location}</span>
                        )}
                      </div>

                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-purple-500 bg-white shadow-lg md:flex"></div>

                  {/* Mobile Layout */}
                  <div className="w-full md:hidden">
                    <div className="transform rounded-2xl bg-white/80 p-6 shadow-lg transition-all duration-300 hover:scale-105">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${event.color} mb-4 text-white`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mb-2 font-serif text-2xl font-bold text-gray-800">
                        {event.title}
                      </h3>

                      <div className="mb-3 flex items-center space-x-4 text-purple-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm">{event.duration}</span>
                      </div>

                      <div className="mb-3 flex items-center space-x-2 text-purple-600">
                        <MapPin className="h-4 w-4" />
                        {event.mapUrl ? (
                          <a
                            href={event.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium underline transition hover:text-purple-800"
                          >
                            {event.location}
                          </a>
                        ) : (
                          <span className="font-medium">{event.location}</span>
                        )}
                      </div>

                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Spacer for even items on desktop */}
                  <div className="hidden w-1/2 md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
