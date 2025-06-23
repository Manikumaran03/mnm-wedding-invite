import { Calendar, MapPin, Heart } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

const Home = () => {
  const weddingDate = '2025-09-04T09:00:00'; // Example wedding date/time
  const receptionDate = '2025-09-07T07:00:00'; // Example reception date/time

  const weddingCountdown = useCountdown(weddingDate);
  const receptionCountdown = useCountdown(receptionDate);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-[url('/home_bg2.png')] bg-cover bg-center bg-no-repeat px-4 pt-20"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 border border-white/20 bg-white/30 shadow-inner backdrop-blur-md"></div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center">
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

          {/* Main Content */}
          <div className="animate-in fade-in duration-1000">
            <p className="mb-4 text-lg font-medium uppercase tracking-wider text-white">
              Save The Date
            </p>

            <h1 className="font-signature text-5xl font-bold leading-tight text-black/80 md:text-7xl lg:text-purple-950">
              Manikumaran
            </h1>
            <h1 className="font-signature text-4xl font-bold leading-tight text-black/80 md:text-3xl lg:text-purple-950">
              &
            </h1>
            <h1 className="mb-4 font-signature text-5xl font-bold leading-tight text-black/80 md:text-7xl lg:text-purple-950">
              Manisha
            </h1>

            <p className="text-gray mb-8 text-xl font-light md:text-xl lg:text-white">
              Together with our families, we invite you to celebrate our love
            </p>

            <div className="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-12 md:space-y-0">
              {/* Wedding Details */}
              <div className="flex flex-col items-center space-y-4 text-center md:w-1/2 md:items-end md:text-right">
                <div className="flex items-center space-x-2 md:justify-end">
                  <span className="text-xl font-bold text-purple-800">
                    💍 Wedding{' '}
                    <p className="text-right font-mono text-sm text-white">
                      {weddingCountdown.isComplete
                        ? 'We are married ❤️'
                        : `${weddingCountdown.days}d ${weddingCountdown.hours}h 
                      ${weddingCountdown.minutes}m ${weddingCountdown.seconds}s`}
                    </p>
                  </span>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">September 04, 2025</p>
                    <p className="lg:text-purple/80 text-sm">Thursday, 9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Vadapalani Murugan Temple</p>
                    <p className="lg:text-purple/80 text-sm">Vadapalani, Chennai</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-32 w-px bg-purple-300 md:block" />

              {/* Reception Details */}
              <div className="flex flex-col items-center space-y-4 text-center md:w-1/2 md:items-start md:text-left">
                <div className="flex items-center space-x-2 md:justify-start">
                  <span className="text-xl font-bold text-purple-800">
                    🎉 Reception{' '}
                    <p className="text-right font-mono text-sm text-white">
                      {receptionCountdown.isComplete
                        ? 'Missed you at our big day 😊'
                        : `${receptionCountdown.days}d ${receptionCountdown.hours}h 
                      ${receptionCountdown.minutes}m ${receptionCountdown.seconds}s`}
                    </p>
                  </span>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">September 07, 2025</p>
                    <p className="lg:text-purple/80 text-sm">Sunday, 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:text-purple-800">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">A.K.R. Mahal</p>
                    <p className="lg:text-purple/80 text-sm">Virugambakkam, CHennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
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
