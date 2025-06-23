import { useEffect, useState } from 'react';
import { Heart, Gift, Users, ArrowUp } from 'lucide-react';

function Thankyou() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="via-lavender-50 relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="relative z-10">
        {/* Header */}
        <header
          className={`pb-8 pt-12 text-center transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-300"></div>
            <Heart className="animate-pulse-slow h-6 w-6 text-purple-500" fill="currentColor" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-300"></div>
          </div>
          <h1 className="via-lavender-600 mb-2 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text font-serif text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            You're Invited
          </h1>
          <p className="font-sans text-lg font-medium tracking-wider text-purple-600 md:text-xl">
            Manikumaran & Manisha are tying the knot!
          </p>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-4xl space-y-16 px-6">
          {/* Hero Message */}
          <section
            className={`text-center transition-all delay-300 duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white/70 p-8 shadow-xl backdrop-blur-sm md:p-12">
              <div className="via-lavender-400 absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-300 to-purple-300"></div>
              <div className="relative z-10">
                <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-gray-800 md:text-4xl lg:text-5xl">
                  We can’t say "I do" without you
                </h2>
                <p className="mx-auto max-w-3xl font-sans text-lg leading-relaxed text-gray-700 md:text-xl">
                  Our big day wouldn’t be the same without your love, laughter, and blessings. We’d
                  be honored to have you by our side as we begin this beautiful new chapter of our
                  lives together.
                </p>
              </div>
            </div>
          </section>

          {/* Invite Highlights */}
          <section className="grid gap-8 md:grid-cols-2">
            <div
              className={`transition-all delay-500 duration-1000 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
            >
              <div className="group rounded-2xl border border-purple-100 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="to-lavender-100 group-hover:to-lavender-200 rounded-full bg-gradient-to-br from-purple-100 p-3 transition-colors group-hover:from-purple-200">
                    <Gift className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-800">
                    Your Blessings Mean Everything
                  </h3>
                </div>
                <p className="font-sans leading-relaxed text-gray-700">
                  As we step into this new chapter, your love and support will make the celebration
                  even more meaningful. Come be part of our happily ever after.
                </p>
              </div>
            </div>

            <div
              className={`transition-all delay-700 duration-1000 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
            >
              <div className="group rounded-2xl border border-purple-100 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="from-lavender-100 group-hover:from-lavender-200 rounded-full bg-gradient-to-br to-purple-100 p-3 transition-colors group-hover:to-purple-200">
                    <Users className="text-lavender-600 h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-800">
                    We Want You There
                  </h3>
                </div>
                <p className="font-sans leading-relaxed text-gray-700">
                  Your presence will complete our celebration. We truly hope you’ll join us to
                  witness, bless, and dance through the happiest day of our lives.
                </p>
              </div>
            </div>
          </section>

          {/* Closing Message */}
          <section
            className={`delay-1100 pb-16 text-center transition-all duration-1000 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-300"></div>
              <Heart className="animate-pulse-slow h-5 w-5 text-purple-500" fill="currentColor" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-300"></div>
            </div>
            <h4 className="mb-4 font-serif text-2xl font-semibold text-gray-800 md:text-3xl">
              Save the Date. Celebrate With Us.
            </h4>
            <p className="mx-auto max-w-xl font-sans text-lg leading-relaxed text-gray-700">
              We can't wait to celebrate our big day with the people who mean the most to us. Your
              presence is our biggest gift.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="font-serif text-xl font-medium text-purple-600">
                Manikumaran & Manisha ♡
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-full border-none bg-purple-600/50 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-purple-700/40 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
        >
          <ArrowUp className="h-4 w-4" /> Top
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
