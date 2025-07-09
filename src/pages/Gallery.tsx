import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Using placeholder images from Pexels for wedding/couple photos
  const images = [
    {
      src: '/mnm-wedding-invite/Gallery.jpg',
      alt: 'Malangu bowl',
    },
    {
      src: '/mnm-wedding-invite/Gallery_2.jpg',
      alt: 'Engagement cake',
    },
    {
      src: '/mnm-wedding-invite/Gallery_3.jpg',
      alt: 'Holding hands',
    },
    {
      src: '/mnm-wedding-invite/Gallery_4.jpg',
      alt: 'Ring exchange by her',
    },
    {
      src: '/mnm-wedding-invite/Gallery_5.jpg',
      alt: 'Ring exchange by me',
    },
    {
      src: '/mnm-wedding-invite/Gallery_6.jpg',
      alt: 'Her Hand',
    },
    {
      src: '/mnm-wedding-invite/Gallery_7.jpg',
      alt: 'My hand',
    },
    {
      src: '/mnm-wedding-invite/Gallery_8.jpg',
      alt: 'Our ring',
    },
    {
      src: '/mnm-wedding-invite/Gallery_9.jpg',
      alt: 'Our ring',
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="px-4 py-20">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-800 md:text-5xl">
            Our Memories
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-700"></div>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            A collection of beautiful moments we've shared together
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square transform cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Heart className="h-8 w-8 animate-pulse fill-current text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Actual image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
            />

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {selectedImage + 1} of {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
