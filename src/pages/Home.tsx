import { Calendar, MapPin, Heart } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

const Home = () => {
  const weddingDate = '2025-09-04T09:00:00';
  const receptionDate = '2025-09-07T07:00:00';

  const weddingCountdown = useCountdown(weddingDate);
  const receptionCountdown = useCountdown(receptionDate);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-[url('/home_bg.png')] bg-cover bg-center bg-no-repeat px-4 pt-20"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 border border-white/20 bg-white/30 shadow-inner backdrop-blur-md"></div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Decorative Hearts */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-4">
              <Heart
                className="h-6 w-6 animate-bounce fill-current text-purple-400"
                style={{ animationDelay: '0s' }}
              />
              <Heart
                className="h-8 w-8 animate-bounce fill-current text-purple-500"
                style={{ animationDelay: '0.2s' }}
              />
              <Heart
                className="h-6 w-6 animate-bounce fill-current text-purple-400"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>

          {/* Invite Message */}
          <div className="animate-in fade-in duration-1000">
            <p className="mb-4 text-lg font-medium uppercase tracking-wider lg:text-white">
              You're Invited
            </p>

            <p className="mb-8 text-xl font-light md:text-xl lg:text-white">
              With joyful hearts and the blessings of our families,
              <br />
              we invite you to celebrate the beginning of our forever.
            </p>

            <h1 className="font-alexBrush text-5xl font-bold leading-tight text-purple-950 md:text-7xl">
              Manikumaran & Manisha
            </h1>
            <p className="mt-2 text-lg font-light italic lg:text-white">
              Tying the knot and writing our forever story 💍
            </p>

            {/* Wedding + Reception Details */}
            <div className="mt-12 flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-12 md:space-y-0">
              {/* Wedding Block */}
              <div className="flex flex-col items-center space-y-4 text-center md:w-1/2 md:items-end md:text-right">
                <div className="flex items-center space-x-2 md:justify-end">
                  <span className="text-xl font-bold text-purple-800">
                    💍 Wedding
                    <div className="flex justify-end gap-2 py-4 font-mono text-sm text-white">
                      {weddingCountdown.isComplete ? (
                        <span>The big day was magical — thank you for being part of it! 💖</span>
                      ) : (
                        <>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {weddingCountdown.days}d
                          </div>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {weddingCountdown.hours}h
                          </div>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {weddingCountdown.minutes}m
                          </div>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {weddingCountdown.seconds}s
                          </div>
                        </>
                      )}
                    </div>
                  </span>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">September 04, 2025</p>
                    <p className="text-sm">Thursday, 9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Vadapalani Murugan Temple</p>
                    <p className="text-sm">Vadapalani, Chennai</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-36 w-px bg-purple-300 md:block" />

              {/* Reception Block */}
              <div className="flex flex-col items-center space-y-4 text-center md:w-1/2 md:items-start md:text-left">
                <div className="flex items-center space-x-2 md:justify-start">
                  <span className="text-xl font-bold text-purple-800">
                    🎉 Reception
                    <div className="flex justify-start gap-2 py-4 font-mono text-sm text-white">
                      {receptionCountdown.isComplete ? (
                        <span>The celebration was unforgettable — we felt your love! 🎊</span>
                      ) : (
                        <>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {receptionCountdown.days}d
                          </div>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {receptionCountdown.hours}h
                          </div>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {receptionCountdown.minutes}m
                          </div>
                          <div className="rounded-md bg-violet-400 px-2 py-1">
                            {receptionCountdown.seconds}s
                          </div>
                        </>
                      )}
                    </div>
                  </span>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">September 07, 2025</p>
                    <p className="text-sm">Sunday, 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">A.K.R. Mahal</p>
                    <p className="text-sm">Virugambakkam, Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Glow Elements */}
        <div className="animate-float absolute left-10 top-1/4">
          <div className="h-20 w-20 rounded-full bg-purple-200/30 blur-xl"></div>
        </div>
        <div className="animate-float absolute right-10 top-1/3" style={{ animationDelay: '2s' }}>
          <div className="h-16 w-16 rounded-full bg-purple-300/20 blur-xl"></div>
        </div>
        <div
          className="animate-float absolute bottom-1/4 left-1/4"
          style={{ animationDelay: '4s' }}
        >
          <div className="h-12 w-12 rounded-full bg-purple-400/25 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
