import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Profile Approved ✅',
      description:
        'Our biodatas did a better job than any dating app. Parents swiped right before we could even blink!',
      icon: Heart,
    },
    {
      year: '2024',
      title: 'First Call ☎️',
      description:
        'Awkward hellos turned into hours of non-stop talking. We realized we laugh at the same memes — destiny? Probably.',
      icon: Star,
    },
    {
      year: '2025',
      title: 'Sealed with a Ring 💍',
      description:
        'Yes, we got engaged! No, we still don’t know where to look in photos or how to hold hands without looking awkward.',
      icon: Sparkles,
    },
    {
      year: '2025',
      title: 'The Countdown is Real ⏳',
      description:
        'Life turned into a series of checklists: Venue? Booked. Outfits? Almost. Sleep? Who needs it anyway?',
      icon: Heart,
    },
  ];

  return (
    <section id="journey" className="bg-gradient-to-br from-purple-50 to-white px-4 py-20">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-800 md:text-5xl">
            Our Journey
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-700"></div>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            “Proof that destiny really knows how to do its job.” 😉
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;

              return (
                <div
                  key={index}
                  className="group transform rounded-2xl border border-purple-100 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-8 w-8 fill-current" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-3 flex items-center space-x-3">
                        <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-purple-300 to-transparent"></div>
                      </div>

                      <h3 className="mb-3 font-serif text-xl font-bold text-gray-800">
                        {milestone.title}
                      </h3>

                      <p className="leading-relaxed text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-purple-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm">
            <blockquote className="mb-4 font-serif text-2xl italic text-gray-700 md:text-3xl">
              "We didn’t fall in love. We walked into it — guided by family, tradition, and a whole
              lot of sweet awkwardness!"
            </blockquote>
            <cite className="font-medium text-purple-600">— Us 😄</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
